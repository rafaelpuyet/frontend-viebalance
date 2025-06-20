import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { first_name, last_name, email, phone, source, preferred_time } = await req.json();

    // Validaciones backend
    if (!first_name || first_name.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'El nombre debe tener al menos 2 caracteres' }), {
        status: 400,
      });
    }
    if (!last_name || last_name.trim().length < 2) {
      return new Response(JSON.stringify({ error: 'El apellido debe tener al menos 2 caracteres' }), {
        status: 400,
      });
    }
    if (!email || !/^[^\s@]+@([^\s@.,]+\.)+[^\s@,.]{2,}$/.test(email)) {
      return new Response(JSON.stringify({ error: 'Ingresa un correo electrónico válido' }), {
        status: 400,
      });
    }
    if (!phone || !/^\+56\d{8,9}$/.test(phone.replace(/\s/g, ''))) {
      return new Response(JSON.stringify({ error: 'Ingresa un número de teléfono válido' }), {
        status: 400,
      });
    }
    if (!source || !['instagram', 'google', 'recomendacion', 'facebook', 'otro'].includes(source)) {
      return new Response(JSON.stringify({ error: 'Selecciona una fuente válida' }), {
        status: 400,
      });
    }
    if (!preferred_time || !['morning', 'afternoon'].includes(preferred_time)) {
      return new Response(JSON.stringify({ error: 'Selecciona un horario válido' }), {
        status: 400,
      });
    }

    // Verificar si el email ya existe
    const { data: existing } = await supabase
      .from('trial_reservations')
      .select('email')
      .eq('email', email)
      .single();

    if (existing) {
      return new Response(JSON.stringify({ error: 'Este correo ya está registrado' }), {
        status: 409,
      });
    }

    // Guardar en Supabase
    const { error } = await supabase.from('trial_reservations').insert([
      {
        first_name,
        last_name,
        email,
        phone,
        source,
        preferred_time,
        status: 'pending',
      },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error: 'Error al guardar los datos' }), { status: 500 });
    }

    /* Enviar mensaje de WhatsApp con WAHA
    try {
      const chatId = phone.replace('+', '') + '@c.us'; // e.g., +56912345678 -> 56912345678@c.us
      await axios.post(
        'http://localhost:3000/api/sendText',
        {
          chatId,
          text: `¡Gracias por reservar tu clase gratuita en Vie Balance Pilates, ${first_name}! Tamara se contactará pronto.`,
          session: 'default',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // Opcional: 'X-Api-Key': process.env.WAHA_API_KEY,
          },
        }
      );
    } catch (wahaError) {
      console.error('Error enviando mensaje de WhatsApp:', wahaError.message);
      // No fallar la respuesta principal si WAHA falla
    }*/

    return new Response(JSON.stringify({ message: 'Formulario enviado con éxito' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
}