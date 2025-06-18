export default function Course() {
  return (
    <section className="py-16 px-6 md:px-10 bg-cream-white" id="course">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-dark-moss sm:text-4xl">
            Pilates Reformer: La Experiencia Completa
          </h2>
          <p className="mt-4 text-lg text-medium-text max-w-2xl mx-auto">
            Descubre los beneficios únicos del <strong>Pilates Reformer</strong> en nuestro estudio en Las Condes. 
            Equipamiento profesional y atención personalizada para resultados excepcionales.
          </p>
          
          <div className="mt-6 inline-flex items-center bg-gradient-to-r from-light-pink to-soft-salmon border-2 border-grayish-green rounded-lg px-6 py-3">
            <span className="material-icons-outlined text-dark-moss mr-2">info</span>
            <span className="text-dark-moss font-semibold">Valor regular: $25.000 por sesión • Tu primera clase: GRATIS</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-dark-moss mb-6">¿Por qué Pilates Reformer?</h3>
            <ul className="space-y-4 text-medium-text">
              <li className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-3 mt-1" aria-label="Resistencia variable">fitness_center</span>
                <div>
                  <strong>Resistencia Variable:</strong> El sistema de poleas y resortes permite ajustar la resistencia perfectamente a tu nivel y necesidades específicas.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-3 mt-1" aria-label="Movimientos precisos">precision_manufacturing</span>
                <div>
                  <strong>Movimientos Precisos:</strong> La máquina guía tus movimientos, asegurando una técnica correcta y resultados más efectivos.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-3 mt-1" aria-label="Rehabilitación avanzada">healing</span>
                <div>
                  <strong>Rehabilitación Avanzada:</strong> Ideal para recuperación de lesiones y fortalecimiento específico con supervisión kinesiológica.
                </div>
              </li>
              <li className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-3 mt-1" aria-label="Resultados acelerados">trending_up</span>
                <div>
                  <strong>Resultados Acelerados:</strong> Notarás mejoras en fuerza, flexibilidad y postura desde las primeras sesiones.
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-xl shadow-lg overflow-hidden aspect-video">
            <img alt="Pilates Reformer en acción en Las Condes" className="w-full h-full object-cover"
              src="/images/reformer.webp" loading="lazy" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-light-pink to-soft-salmon rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold text-dark-moss text-center mb-6">
            Tu Primera Clase GRATUITA Incluye:
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-cream-white/70 rounded-lg p-4">
              <span className="material-icons-outlined text-terracotta text-3xl block mb-2">assessment</span>
              <h4 className="font-semibold text-sm mb-1">Evaluación Inicial</h4>
              <p className="text-xs text-medium-text">Análisis postural y de movimiento</p>
            </div>
            <div className="bg-cream-white/70 rounded-lg p-4">
              <span className="material-icons-outlined text-terracotta text-3xl block mb-2">fitness_center</span>
              <h4 className="font-semibold text-sm mb-1">Sesión Reformer</h4>
              <p className="text-xs text-medium-text">60 minutos de entrenamiento personalizado</p>
            </div>
            <div className="bg-cream-white/70 rounded-lg p-4">
              <span className="material-icons-outlined text-terracotta text-3xl block mb-2">psychology</span>
              <h4 className="font-semibold text-sm mb-1">Plan Personalizado</h4>
              <p className="text-xs text-medium-text">Programa adaptado a tus objetivos</p>
            </div>
            <div className="bg-cream-white/70 rounded-lg p-4">
              <span className="material-icons-outlined text-terracotta text-3xl block mb-2">support_agent</span>
              <h4 className="font-semibold text-sm mb-1">Seguimiento</h4>
              <p className="text-xs text-medium-text">Recomendaciones para continuar</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-lg font-bold text-dark-moss">Valor Total: $25.000</p>
            <p className="text-2xl font-bold text-terracotta">Hoy: COMPLETAMENTE GRATIS</p>
          </div>
        </div>
        
        <div className="text-center">
          <button className="flex mx-auto min-w-[260px] max-w-[400px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-terracotta text-cream-white text-lg font-semibold tracking-wide shadow-lg hover:bg-dark-moss transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-opacity-50">
            <span className="material-icons-outlined mr-2">schedule</span>
            <span className="truncate">Reservar Mi Clase Gratuita</span>
          </button>
          <p className="text-sm text-light-text mt-3">
            ⏰ Oferta por tiempo limitado • Sin compromisos • Cancelación gratuita
          </p>
        </div>
      </div>
    </section>
  );
}