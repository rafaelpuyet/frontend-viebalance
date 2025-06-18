export default function AboutInstructor() {
  return (
    <>
      <section className="py-16 px-6 lg:px-8 bg-cream-white" id="instructor-video">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-moss mb-4">
            Conoce a Tu Instructora de Pilates
          </h2>
          <p className="text-lg text-medium-text mb-8 max-w-2xl mx-auto">
            Descubre por qué más de 150 personas en Las Condes confían en la experiencia y pasión de Tamara por el Pilates Reformer
          </p>
          <div className="aspect-video rounded-xl shadow-2xl overflow-hidden mx-auto max-w-3xl border-4 border-grayish-green">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/TU_VIDEO_ID?rel=0"
              title="Tamara Puyet - Instructora de Pilates Reformer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      
      <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-cream-beige to-cream-white" id="sobre-nosotros">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-moss mb-4">
              Tamara Puyet Cerda
            </h2>
            <p className="text-terracotta text-lg font-semibold mb-4">
              Kinesióloga e Instructora Certificada de Pilates Reformer
            </p>
            
            <p className="text-medium-text text-lg mb-4">
              Apasionada por el movimiento y el bienestar, me especializo en <strong>Pilates Reformer</strong> para ayudar a las personas a transformar su cuerpo y mejorar su calidad de vida a través del ejercicio consciente y personalizado.
            </p>
            
            <p className="text-medium-text text-lg mb-6">
              Mi enfoque es completamente personalizado: cada clase está diseñada específicamente para ti, tus objetivos y tu nivel. Con certificación internacional en Pilates Reformer, formación en kinesiología y formación continua, te ofrezco una experiencia única en nuestro estudio en Las Condes.
            </p>
            
            <div className="bg-cream-white/70 border-l-4 border-grayish-green p-4 rounded-lg mb-6">
              <p className="text-medium-text italic">
                "El Pilates Reformer permite un trabajo más preciso y efectivo. Mi misión es ayudarte a descubrir la fuerza que llevas dentro, con resultados que se sienten desde la primera clase."
              </p>
            </div>
            
            <ul className="space-y-3 text-medium-text mb-6">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-light-pink rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Kinesióloga titulada
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-light-pink rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Instructora Certificada en Pilates Reformer
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-light-pink rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Formación continua con instructores internacionales
              </li>
            </ul>
            
            <div className="bg-gradient-to-r from-light-pink to-soft-salmon border-2 border-grayish-green rounded-lg p-6 mb-6">
              <div className="text-center">
                <p className="text-sm text-dark-moss font-semibold mb-2">OFERTA ESPECIAL PARA NUEVOS ALUMNOS</p>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-2xl text-light-text line-through">$25.000</span>
                  <span className="text-4xl font-bold text-terracotta">GRATIS</span>
                </div>
                <p className="text-sm text-medium-text">Clase de Pilates Reformer Personalizada • 60 minutos</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contacto" 
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-terracotta hover:bg-dark-moss text-cream-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-opacity-50"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reserva tu Clase GRATUITA
              </a>
              <p className="text-xs text-light-text mt-2 text-center sm:text-left">
                ⏰ Solo por tiempo limitado • Sin compromiso • Valor real $25.000
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="rounded-xl shadow-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <img 
                alt="Tamara Puyet - Instructora especialista en Pilates Reformer Las Condes" 
                className="w-full h-full object-cover"
                src="/tamara.png"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}