import Link from 'next/link'

export default function Course() {
  return (
    <section className="py-16 px-6 md:px-10 bg-cream-white" id="course">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pilates Reformer: La Experiencia Completa
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre los beneficios únicos del <strong>Pilates Reformer</strong> en nuestro estudio en Las Condes.
            Equipamiento profesional y atención personalizada para resultados excepcionales.
          </p>

          <div className="bg-golden-beige border-2 border-terracotta rounded-lg p-6 mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-900 font-semibold mb-2">OFERTA ESPECIAL PARA NUEVOS ALUMNOS</p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-2xl text-gray-600 line-through">$25.000</span>
                <span className="text-4xl font-bold text-accent-orange">GRATIS</span>
              </div>
              <p className="text-sm text-gray-700">Clase de Pilates Reformer Personalizada • 60 minutos</p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/trial-class"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-accent-orange hover:bg-terracotta text-white text-lg font-semibold rounded-lg shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserva tu Clase GRATUITA
            </Link>
            <p className="text-xs text-gray-600 mt-2 text-center sm:text-left">
              ⏰ Solo por tiempo limitado • Sin compromiso • Valor real $25.000
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">¿Por qué Pilates Reformer?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Resistencia variable">fitness_center</span>
                <div>
                  <strong>Resistencia Variable:</strong> El sistema de poleas y resortes permite ajustar la resistencia perfectamente a tu nivel y necesidades específicas.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Movimientos precisos">precision_manufacturing</span>
                <div>
                  <strong>Movimientos Precisos:</strong> La máquina guía tus movimientos, asegurando una técnica correcta y resultados más efectivos.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt doctrines-agr">healing</span>
                <div>
                  <strong>Rehabilitación Avanzada:</strong> Ideal para recuperación de lesiones y fortalecimiento específico con supervisión kinesiológica.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Resultados acelerados">trending_up</span>
                <div>
                  <strong>Resultados Acelerados:</strong> Notarás mejoras en fuerza, flexibilidad y postura desde las primeras sesiones.
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden aspect-video border-terracotta">
            <img alt="Pilates Reformer en acción en Las Condes" className="w-full h-full object-cover"
              src="/reformer.png" loading="lazy" />
          </div>
        </div>

        <div className="bg-golden-beige rounded-2xl p-8 mb-8 border border-terracotta">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-6">
            Tu Primera Clase GRATUITA Incluye:
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-cream-white rounded-lg p-4">
              <span className="material-icons-outlined text-accent-orange text-3xl block mb-2">assessment</span>
              <h4 className="font-semibold text-sm mb-1">Evaluación Inicial</h4>
              <p className="text-xs text-gray-700">Análisis postural y de movimiento</p>
            </div>
            <div className="bg-cream-white rounded-lg p-4">
              <span className="material-icons-outlined text-accent-orange text-3xl block mb-2">fitness_center</span>
              <h4 className="font-semibold text-sm mb-1">Sesión Reformer</h4>
              <p className="text-xs text-gray-700">60 minutos de entrenamiento personalizado</p>
            </div>
            <div className="bg-cream-white rounded-lg p-4">
              <span className="material-icons-outlined text-accent-orange text-3xl block mb-2">psychology</span>
              <h4 className="font-semibold text-sm mb-1">Plan Personalizado</h4>
              <p className="text-xs text-gray-700">Programa adaptado a tus objetivos</p>
            </div>
            <div className="bg-cream-white rounded-lg p-4">
              <span className="material-icons-outlined text-accent-orange text-3xl block mb-2">support_agent</span>
              <h4 className="font-semibold text-sm mb-1">Seguimiento</h4>
              <p className="text-xs text-gray-700">Recomendaciones para continuar</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg font-bold text-gray-900">Valor Total: $25.000</p>
            <p className="text-2xl font-bold text-accent-orange">Hoy: COMPLETAMENTE GRATIS</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/trial-class">
            <button className="flex mx-auto min-w-[260px] max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-accent-orange text-white text-lg font-semibold tracking-wide shadow-lg hover:bg-terracotta transition-all duration-200">
              <span className="material-icons-outlined mr-2">schedule</span>
              <span className="truncate">Reservar Mi Clase Gratuita</span>
            </button>
          </Link>
          <p className="text-sm text-gray-600 mt-3">
            ⏰ Oferta por tiempo limitado • Sin compromisos • Cancelación gratuita
          </p>
        </div>
      </div>
    </section>
  );
}