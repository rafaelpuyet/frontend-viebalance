'use client';

export default function ContactForm() {
  return (
    <section className="py-16 px-6 md:px-10 bg-cream-beige" id="contacto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            ¿Listo/a para experimentar los beneficios del Pilates Reformer? Reserva tu clase gratuita o contáctanos para más información.
          </p>
        </div>

        <div className="bg-cream-white rounded-xl shadow-lg p-8 border-terracotta max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="material-icons-outlined text-olive-green mr-4 mt-1">location_on</span>
              <div>
                <h4 className="font-semibold text-gray-900">Ubicación</h4>
                <p className="text-gray-700">Chesterton 8039, Las Condes<br />Santiago, Región Metropolitana</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="material-icons-outlined text-olive-green mr-4 mt-1">phone</span>
              <div>
                <h4 className="font-semibold text-gray-900">Teléfono</h4>
                <a href="tel:+56987654321" className="text-olive-green hover:underline">
                  +56 9 8765 4321
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="material-icons-outlined text-olive-green mr-4 mt-1">email</span>
              <div>
                <h4 className="font-semibold text-gray-900">Email</h4>
                <a href="mailto:info@viebalance.cl" className="text-olive-green hover:underline">
                  info@viebalance.cl
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <span className="material-icons-outlined text-olive-green mr-4 mt-1">schedule</span>
              <div>
                <h4 className="font-semibold text-gray-900">Horarios</h4>
                <p className="text-gray-700">
                  Lunes a Viernes: 8:00 - 20:00<br />
                  Sábados: 9:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="/trial-class"
              className="inline-flex items-center justify-center px-8 py-4 bg-accent-orange hover:bg-terracotta text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-200"
            >
              <span className="material-icons-outlined mr-2">schedule</span>
              Reserva tu Clase Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}