"use client"
export default function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 px-6 lg:px-8 bg-cream-gradient">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" 
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg><g fill=none fill-rule=evenodd><g fill-opacity=0.1><circle cx=30 cy=30 r=3/></g></g></svg>")', 
            backgroundSize: '60px 60px' 
          }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-cream-beige border border-terracotta rounded-full px-4 py-2 mb-8">
              <svg className="w-5 h-5 text-olive-green mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium text-olive-green">Instructora Certificada • Pilates Reformer</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Pilates Reformer
              <br />
              <span className="text-accent-orange">Personalizado</span>
              <br />
              en Las Condes
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-lg">
              Fortalece tu core, mejora tu postura y transforma tu cuerpo con 
              <strong> clases personalizadas</strong> en nuestro estudio boutique.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Clases completamente personalizadas</h3>
                  <p className="text-gray-600 text-sm">Rutinas adaptadas a tu nivel y objetivos específicos</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Equipos Reformer de última generación</h3>
                  <p className="text-gray-600 text-sm">Tecnología profesional para máximos resultados</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Ambiente exclusivo y relajante</h3>
                  <p className="text-gray-600 text-sm">Estudio boutique diseñado para tu bienestar</p>
                </div>
              </div>
            </div>

            <div className="bg-golden-beige rounded-2xl p-6 mb-8 border border-terracotta">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Primera Clase de Prueba</h3>
                <div className="text-2xl font-bold text-accent-orange mb-2">Gratis</div>
                <p className="text-sm text-gray-700 mb-4">
                  Conoce nuestro método y descubre el poder del Pilates Reformer
                </p>
                <p className="text-xs text-gray-600">
                  * Promoción válida para nuevos alumnos
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="flex-1 bg-accent-orange hover:bg-terracotta text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reservar Clase de Prueba
              </button>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <img 
                src="/hero.png"
                alt="Estudio Vie Balance - Pilates Reformer en Las Condes"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-terracotta"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-cream-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">4.9/5</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>150+ alumnos</strong> han transformado su cuerpo y bienestar con nuestras clases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}