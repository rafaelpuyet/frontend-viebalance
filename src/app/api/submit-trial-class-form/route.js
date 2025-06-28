import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function POST(req) {
  try {
    const { first_name, last_name, email, phone, source, preferred_time, class_type } = await req.json();

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
    if (!source || !['instagram', 'tiktok', 'youtube', 'google', 'recomendacion', 'facebook', 'sitio-web', 'otro'].includes(source)) {
      return new Response(JSON.stringify({ error: 'Selecciona una fuente válida' }), {
        status: 400,
      });
    }
    if (!preferred_time || !['morning', 'afternoon'].includes(preferred_time)) {
      return new Response(JSON.stringify({ error: 'Selecciona un horario válido' }), {
        status: 400,
      });
    }
    if (!class_type || !['pilates', 'elastic-training'].includes(class_type)) {
      return new Response(JSON.stringify({ error: 'Selecciona un tipo de clase válido' }), {
        status: 400,
      });
    }

    // Verificar si ya existe una reserva para el mismo email o teléfono y tipo de clase
    const { data: existing } = await supabase
      .from('trial_reservations')
      .select('email, phone, class_type')
      .or(`email.eq.${email},phone.eq.${phone}`)
      .eq('class_type', class_type)
      .single();

    if (existing) {
      const className = class_type === 'pilates' ? 'Pilates' : 'Elastic Training';
      return new Response(
        JSON.stringify({ error: `Ya has reservado una clase gratuita de ${className}` }),
        { status: 409 }
      );
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
        class_type,
        status: 'pending',
      },
    ]);

    if (error) {
      return new Response(JSON.stringify({ error: 'Error al guardar los datos' }), { status: 500 });
    }

    try {
      const chatId = phone.replace('+', '') + '@c.us';
      const className = class_type === 'pilates' ? 'Pilates' : 'Elastic Training';
      await axios.post(
        'http://ec2-52-14-105-173.us-east-2.compute.amazonaws.com:3030/api/sendText',
        {
          chatId,
          text: `¡Gracias por reservar tu clase gratuita de ${className} en Vie Balance, ${first_name}! Nos contactaremos pronto!.`,
          session: 'default',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Api-Key': process.env.WAHA_API_KEY,
          },
        }
      );
    } catch (wahaError) {
      console.error('Error enviando mensaje de WhatsApp:', wahaError.message);
      // No fallar la respuesta principal si WAHA falla
    }

    return new Response(JSON.stringify({ message: 'Formulario enviado con éxito' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), { status: 500 });
  }
}