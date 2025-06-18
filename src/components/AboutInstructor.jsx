export default function AboutInstructor() {
  return (
    <>
      <section className="py-16 px-6 lg:px-8 bg-cream-white" id="instructor-video">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Conoce a Tu Instructora de Pilates
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Descubre por qué más de 150 personas en Las Condes confían en la experiencia y pasión de Tamara por el Pilates Reformer
          </p>
          <div className="aspect-video rounded-xl shadow-2xl overflow-hidden mx-auto max-w-3xl border-4 border-terracotta">
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

      <section className="py-16 px-6 lg:px-8 bg-soft-salmon/20" id="sobre-nosotros">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tamara Puyet Cerda
            </h2>
            <p className="text-olive-green text-lg font-semibold mb-4">
              Kinesióloga e Instructora Certificada de Pilates Reformer
            </p>

            <p className="text-gray-700 text-lg mb-4">
              Apasionada por el movimiento y el bienestar, me especializo en <strong>Pilates Reformer</strong> para ayudar a las personas a transformar su cuerpo y mejorar su calidad de vida a través del ejercicio consciente y personalizado.
            </p>

            <p className="text-gray-700 text-lg mb-6">
              Mi enfoque es completamente personalizado: cada clase está diseñada específicamente para ti, tus objetivos y tu nivel. Con certificación internacional en Pilates Reformer, formación en kinesiología y formación continua, te ofrezco una experiencia única en nuestro estudio en Las Condes.
            </p>

            <div className="bg-cream-white border-l-4 border-terracotta p-4 rounded-lg mb-6">
              <p className="text-gray-700 italic">
                "El Pilates Reformer permite un trabajo más preciso y efectivo. Mi misión es ayudarte a descubrir la fuerza que llevas dentro, con resultados que se sienten desde la primera clase."
              </p>
            </div>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Kinesióloga titulada
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Instructora Certificada en Pilates Reformer
              </li>
              <li className="flex items-center">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mr-3">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                Formación continua con instructores internacionales
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-xl shadow-2xl overflow-hidden aspect-square max-w-md mx-auto border-terracotta">
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