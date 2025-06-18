'use client'
export default function WhoIsFor() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6 md:px-10 bg-cream-beige" id="for-you">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-12">
          Este Curso es Perfecto Para Ti Si...
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span
              className="material-icons-outlined text-olive-green text-xl-3 mr-4 mt-1" aria-label="Ejercicio de bajo impacto">accessibility_new</span>
            <p className="text-gray-700 text-base leading-relaxed">Buscas un ejercicio de bajo impacto que la fortalezca y tonifique.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span
              className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Mejorar postura">airline_seat_recline_normal</span>
            <p className="text-gray-700 text-base leading-relaxed">Quieres mejorar tu postura y aliviar el dolor de espalda.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span
              className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Reducir estrés">self_improvement</span>
            <p className="text-gray-700 text-base leading-relaxed">Buscas reducir el estrés y mejorar la claridad mental.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Estilo de vida saludable">spa</span>
            <p className="text-gray-700 text-base leading-relaxed">Estás listo/a para embarcarte en un viaje hacia un estilo de vida más saludable y equilibrado en Las Condes.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Introducción a Pilates">school</span>
            <p className="text-gray-700 text-base leading-relaxed">Eres nuevo/a en Pilates y quieres una introducción completa.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Conexión mente-cuerpo">psychology</span>
            <p className="text-gray-700 text-base leading-relaxed">Deseas construir una fuerte conexión mente-cuerpo.</p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button
            onClick={scrollToContact}
            className="flex mx-auto min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-accent-orange text-white text-lg font-semibold tracking-wide shadow-lg hover:bg-terracotta transition-all duration-200"
          >
            <span className="truncate">Reserva Tu Clase Gratuita</span>
          </button>
        </div>
      </div>
    </section>
  );
}