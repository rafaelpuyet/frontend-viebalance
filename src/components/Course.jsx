export default function Course() {
  return (
        <section class="py-16 px-6 md:px-10 bg-white" id="course">
          <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold tracking-tight text-[var(--dark-text)] sm:text-4xl">
                Curso de Introducción al Pilates
              </h2>
              <p class="mt-4 text-lg text-[var(--medium-text)] max-w-2xl mx-auto">
                Nuestro Curso de Introducción al Pilates está perfectamente diseñado para principiantes y aquellos que
                buscan refinar sus habilidades fundamentales en Chile. Aprende los principios básicos del Pilates,
                mejora la postura y desarrolla fuerza y flexibilidad en un ambiente de apoyo.
              </p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 items-center mb-12">
              <div>
                <h3 class="text-2xl font-semibold text-[var(--dark-text)] mb-4">Lo que Aprenderás:</h3>
                <ul class="space-y-3 text-[var(--medium-text)]">
                  <li class="flex items-start">
                    <span class="material-icons-outlined text-[var(--accent-blue)] mr-2 mt-1">fitness_center</span>
                    <span><strong>Principios Fundamentales del Pilates:</strong> Domina la respiración, el control, la
                      centralización, la precisión y el flujo.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="material-icons-outlined text-[var(--accent-blue)] mr-2 mt-1">self_improvement</span>
                    <span><strong>Ejercicios de Fortalecimiento del Core:</strong> Desarrolla un core fuerte y estable
                      para una mejor postura y reducción del dolor de espalda.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="material-icons-outlined text-[var(--accent-blue)] mr-2 mt-1">spa</span>
                    <span><strong>Conexión Mente-Cuerpo:</strong> Mejora tu conciencia y aprende a moverte con intención
                      y gracia.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="material-icons-outlined text-[var(--accent-blue)] mr-2 mt-1">accessibility_new</span>
                    <span><strong>Mayor Flexibilidad y Movilidad:</strong> Mejora tu rango de movimiento y libertad
                      física general.</span>
                  </li>
                </ul>
              </div>
              <div class="rounded-xl shadow-lg overflow-hidden aspect-video">
                <img alt="Clase de Pilates en progreso" class="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsp1TLI8lFVLc_GyYNeaVrix4epwfW32fPzNbvi6lMdmJ3rGLS27IoMIK741OR05qHaYPygAy_xd9HqEzMybr8YSgZI9H-fkqZ6y2FICPW-5qyqSArTrw8Ei2Iq28ZWVbIaTDSvDOHUGAo0dtpv2NROV44mGBGo8hk1INwlIhUcNuR61-d0P3_jX9lM-0_lIYqdltBQdpA4CYceami_Uyiqi6jUFmsEhQq97oGLO-sXXCdakl6b28APks6vBKnlO2X4eUpPVURhoc" />
              </div>
            </div>
            <div class="text-center">
              <button
                class="flex mx-auto min-w-[180px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-[var(--accent-blue)] text-white text-lg font-semibold tracking-wide shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                <span class="truncate">Comienza Tu Viaje de Pilates</span>
              </button>
            </div>
          </div>
        </section>
  );
}