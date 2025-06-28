import Link from 'next/link'

export default function Course() {
  return (
    <section className="py-16 px-6 md:px-10 bg-cream-white" id="course">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            <strong>
              Descubre los beneficios del Elastic Training en nuestro estudio en Las Condes. Con instructores certificados en un grato ambiente y con una comunidad de la que no te querrás ir.
            </strong>
          </p>

          <div className="mt-8">
            <Link
              href="/trial-class"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-accent-orange hover:bg-terracotta text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Reserva tu Clase GRATUITA
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">¿Por qué deberías hacer Elastic Training?</h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Pérdida de peso y masa muscular">fitness_center</span>
                <div>
                  Ayuda a tonificar y fortalecer músculos con resistencia elástica.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Entrenamiento sin impacto">directions_run</span>
                <div>
                  Entrenamiento de bajo impacto, ideal para articulaciones sensibles.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Fortalecimiento óseo">health_and_safety</span>
                <div>
                  Mejora la densidad ósea y la movilidad articular.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Sueño y estado de ánimo">bedtime</span>
                <div>
                  Eleva tu estado de ánimo y mejora la calidad del sueño.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Alivio de dolores">healing</span>
                <div>
                  Alivia dolores musculares y articulares comunes.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Mejora de postura">straighten</span>
                <div>
                  Corrige y mejora tu postura con ejercicios específicos.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Conciencia corporal">self_improvement</span>
                <div>
                  Aumenta tu conciencia corporal y control de movimientos.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Flexibilidad y equilibrio">balance</span>
                <div>
                  Desarrolla flexibilidad, coordinación y equilibrio.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Reducción de estrés">spa</span>
                <div>
                  Reduce el estrés y promueve el bienestar general.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Cuerpo joven">favorite</span>
                <div>
                  Mantiene tu cuerpo ágil y saludable a cualquier edad.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr3 mt-1" aria-label="Sin experiencia previa">accessibility_new</span>
                <div>
                  No requiere experiencia previa, ideal para principiantes.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-accent-orange mr-3 mt-1" aria-label="Recuperación de lesiones">local_hospital</span>
                <div>
                  Perfecto para rehabilitación y recuperación de lesiones.
                </div>
              </li>
            </ul>

          </div>
          <div className="rounded-xl shadow-lg overflow-hidden aspect-video border-terracotta">
            <img alt="Elastic Training en acción en Las Condes" className="w-full h-full object-cover"
              src="/reformer.png" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}