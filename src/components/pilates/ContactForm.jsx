'use client';

export default function ContactForm() {
  return (
    <section className="py-16 px-6 md:px-10 bg-cream-beige" id="contacto">
      <div className="max-w-4xl mx-auto">
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
        </div>
      </div>
    </section>
  );
}