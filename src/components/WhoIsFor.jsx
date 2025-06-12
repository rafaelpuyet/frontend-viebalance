export default function WhoIsFor() {
  return (
        <section class="py-16 px-6 md:px-10 bg-[var(--soft-blue)]" id="for-you">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold tracking-tight text-center text-[var(--dark-text)] sm:text-4xl mb-12">
              Este Curso es Perfecto Para Ti Si...
            </h2>
            <div class="grid sm:grid-cols-2 gap-x-8 gap-y-6">
              <div class="flex items-start p-4 bg-white/70 rounded-lg shadow-md">
                <span
                  class="material-icons-outlined text-[var(--accent-blue)] text-3xl mr-4 mt-1">accessibility_new</span>
                <p class="text-[var(--medium-text)] text-base leading-relaxed">Buscas un ejercicio de bajo impacto que
                  fortalezca y tonifique.</p>
              </div>
              <div class="flex items-start p-4 bg-white/70 rounded-lg shadow-md">
                <span
                  class="material-icons-outlined text-[var(--accent-blue)] text-3xl mr-4 mt-1">airline_seat_recline_normal</span>
                <p class="text-[var(--medium-text)] text-base leading-relaxed">Quieres mejorar tu postura y aliviar el
                  dolor de espalda.</p>
              </div>
              <div class="flex items-start p-4 bg-white/70 rounded-lg shadow-md">
                <span
                  class="material-icons-outlined text-[var(--accent-blue)] text-3xl mr-4 mt-1">self_improvement</span>
                <p class="text-[var(--medium-text)] text-base leading-relaxed">Buscas reducir el estrés y mejorar la
                  claridad mental.</p>
              </div>
              <div class="flex items-start p-4 bg-white/70 rounded-lg shadow-md">
                <span class="material-icons-outlined text-[var(--accent-blue)] text-3xl mr-4 mt-1">spa</span>
                <p class="text-[var(--medium-text)] text-base leading-relaxed">Estás listo/a para embarcarte en un viaje
                  hacia un estilo de vida más saludable y equilibrado en Chile.</p>
              </div>
              <div class="flex items-start p-4 bg-white/70 rounded-lg shadow-md">
                <span class="material-icons-outlined text-[var(--accent-blue)] text-3xl mr-4 mt-1">school</span>
                <p class="text-[var(--medium-text)] text-base leading-relaxed">Eres nuevo/a en Pilates y quieres una
                  introducción completa.</p>
              </div>
              <div class="flex items-start p-4 bg-white/70 rounded-lg shadow-md">
                <span class="material-icons-outlined text-[var(--accent-blue)] text-3xl mr-4 mt-1">psychology</span>
                <p class="text-[var(--medium-text)] text-base leading-relaxed">Deseas construir una fuerte conexión
                  mente-cuerpo.</p>
              </div>
            </div>
          </div>
        </section>
  );
}