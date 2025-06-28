'use client'
export default function WhoIsFor() {
  return (
    <section className="py-16 px-6 md:px-10 bg-cream-beige" id="for-you">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl mb-12">
          Deberías agendar tu clase de prueba si...
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span
              className="material-icons-outlined text-olive-green text-xl-3 mr-4 mt-1" aria-label="Ejercicio de bajo impacto">accessibility_new</span>
            <p className="text-gray-700 text-base leading-relaxed">Buscas un ejercicio de bajo impacto que te fortalezca y tonifique con bandas elásticas.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span
              className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Mejorar postura">airline_seat_recline_normal</span>
            <p className="text-gray-700 text-base leading-relaxed">Quieres mejorar tu postura, aliviar y prevenir dolores crónicos (dolor de espalda).</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span
              className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Reducir estrés">self_improvement</span>
            <p className="text-gray-700 text-base leading-relaxed">Buscas reducir el estrés, mejorar tu ánimo y calidad de sueño.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Estilo de vida saludable">spa</span>
            <p className="text-gray-700 text-base leading-relaxed">Estás listo/a para embarcarte en un viaje hacia un estilo de vida más saludable y activo.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Introducción a Elastic Training">school</span>
            <p className="text-gray-700 text-base leading-relaxed">Buscas una disciplina que no requiera conocimiento ni experiencia previa.</p>
          </div>
          <div className="flex items-start p-4 bg-cream-white rounded-lg shadow-md border-terracotta">
            <span className="material-icons-outlined text-olive-green text-3xl mr-4 mt-1" aria-label="Conexión mente-cuerpo">psychology</span>
            <p className="text-gray-700 text-base leading-relaxed">Deseas construir un cuerpo saludable para tu futuro.</p>
          </div>
        </div>
      </div>
    </section>
  );
}