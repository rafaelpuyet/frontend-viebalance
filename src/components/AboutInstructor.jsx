export default function AboutInstructor() {
  return (
    <>
        <section class="py-16 px-6 md:px-10 bg-white" id="instructor-video">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-bold tracking-tight text-[var(--dark-text)] sm:text-4xl mb-10">
              Conoce a Tu Instructora, Elena
            </h2>
            <div
              class="aspect-video rounded-xl shadow-2xl overflow-hidden mx-auto max-w-3xl border-4 border-[var(--accent-beige)]">
              <img alt="Instructora de Pilates Elena" class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNRLobezRlZ3pbylfvK_Wx6_btDSE281DiG4ns277zRFM9OeuS2dbjZrikJyrDmBqaD85aPXaE8XU-KiVvbsrYAUy7igm71WLA7cO64PzUQLfS3ISX0Qfz-qgVYIeuRJZucjX7hTfEqRbGhZR0Cr7HePzNVstFJuPIbs8y1mHHmMcViPV-5tTV1bzq6KRGnMhxmfa2dVXLoY66PshgvPGIvL06JJRuxYtu_mhy1anrWaPubmOUd1DpCGpg1r5FHiL5dsX3-hYaLHO" />
            </div>
          </div>
        </section>
        <section class="py-16 px-6 md:px-10 bg-[var(--warm-beige)]" id="about">
          <div class="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div class="order-2 md:order-1">
              <h2 class="text-3xl font-bold tracking-tight text-[var(--dark-text)] sm:text-4xl mb-6">
                Acerca de Elena Rodríguez
              </h2>
              <p class="text-[var(--medium-text)] text-lg mb-4">
                Elena es una instructora de Pilates certificada con más de 10 años de experiencia, dedicada a ayudar a
                las personas a descubrir la alegría y los beneficios del movimiento consciente en Chile.
              </p>
              <p class="text-[var(--medium-text)] text-lg mb-6">
                Su filosofía de enseñanza se centra en crear un ambiente de apoyo y aliento donde cada estudiante se
                sienta empoderado. El enfoque de Elena se basa en la orientación personalizada, asegurando que
                comprendas los principios fundamentales del Pilates y cómo aplicarlos eficazmente para obtener
                resultados duraderos.
              </p>
              <ul class="space-y-2 text-[var(--medium-text)]">
                <li class="flex items-center">
                  <span class="material-icons-outlined text-[var(--accent-blue)] mr-2">check_circle</span> Profesional
                  de Pilates Certificada
                </li>
                <li class="flex items-center">
                  <span class="material-icons-outlined text-[var(--accent-blue)] mr-2">check_circle</span> Especialista
                  en niveles principiante a intermedio
                </li>
                <li class="flex items-center">
                  <span class="material-icons-outlined text-[var(--accent-blue)] mr-2">check_circle</span> Apasionada
                  por el bienestar integral
                </li>
              </ul>
            </div>
            <div class="order-1 md:order-2">
              <div class="rounded-xl shadow-2xl overflow-hidden aspect-square max-w-md mx-auto">
                <img alt="Elena Rodríguez, Instructora de Pilates" class="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmswsCNf_jsV5hrwwNvc6sCwcD2otwf58Jh2qTN5w9KEPZvkZL93ssMtDR0CQoZHgXGf9cN7KKyGkC10RGjElBBxBXOXKRK0_Ef6o7FChNmvBtYni_hxm_-0lQC1_ekdmv9jMfFQvrqayH7UzU8hPm_-EkWKTlEydLlIsi8AKxGjmkqj4Q3_vKfHuIGEU-fYjK1YcGwRVzDRrA_e_czMJ445C37NbgaO6yOYmI8mAqLyfoxh0Eqy2cbbpyDBbwQvPf_SLWm5U4jnRx" />
              </div>
            </div>
          </div>
        </section>
        </>
  );
}