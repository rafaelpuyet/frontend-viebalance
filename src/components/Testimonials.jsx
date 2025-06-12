export default function Testimonials() {
  return (
        <section class="py-16 px-6 md:px-10 bg-white" id="testimonials">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold tracking-tight text-center text-[var(--dark-text)] sm:text-4xl mb-12">
              Lo Que Dicen Nuestros Alumnos en Chile
            </h2>
            <div class="grid md:grid-cols-2 gap-8">
              <div class="bg-[var(--warm-beige)] p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img alt="Sofía C."
                  class="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--accent-blue)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjefnLGER3EIu_ZBuJVv3_EftpGhQm7b3ITmjJBge_eixPtaD-xkwBO24dBXDWjdhAfTTAmQJo9viQ8S9R0Ns-DPy0VE76sY_BmfbjQpFR-_8i9Ts1F-82gQUqeW4UdhEns45qao7AjRjOFWND9aJR0VMLe2qbr979yUb3-nepYO6zF0_SUUCRLWD7Pe8w6KBUKnx2YkJwNSzk5k19qlN0QaVYQmicgISmOhQqHs5l7H6Vh9vTnArlel2hI3xKtBWopVmRTi7w323K" />
                <div class="flex mb-2">
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                </div>
                <p class="text-[var(--medium-text)] italic mb-4 text-base leading-relaxed">
                  "¡Este curso ha cambiado mi vida! Me siento más fuerte, más flexible y mi dolor de espalda ha
                  disminuido significativamente. Elena es una instructora increíble, paciente y alentadora. ¡Lo mejor de
                  Pilates en Santiago!"
                </p>
                <p class="font-semibold text-[var(--dark-text)] text-sm">Sofía C. (Santiago)</p>
              </div>
              <div class="bg-[var(--warm-beige)] p-6 rounded-xl shadow-lg flex flex-col items-center text-center">
                <img alt="Liam B." class="w-20 h-20 rounded-full mb-4 object-cover border-2 border-[var(--accent-blue)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuj2ytrfK3kvmUJaDX56tH2073VIxDjApkCWb6SLlo2NLO4V9_K6f1g48BsdEQJNZq5hnpi2zkkfCl_IBKpkrRy1kIESxmTAmb8g9GDTPSHBhkjxs3D8pHi29pCHFHjWREw1YdFiRh2DPYkyTmM8CwG9OBEkXmZS9Naq38QQClrRSB45wfsIRjID--jOqBF3TQVvxN1_BpHF-k2X7VlOb5WrSCyJ6HoTRTd47UXoyzz7G9FcnaWGTNq5u9FEkJJpqD_AkrraLTHL4E" />
                <div class="flex mb-2">
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                  <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
                </div>
                <p class="text-[var(--medium-text)] italic mb-4 text-base leading-relaxed">
                  "Al principio era escéptico, pero este curso de Pilates superó mis expectativas. Es un gran ejercicio
                  que también es increíblemente relajante. ¡Lo recomiendo a cualquiera en Chile!"
                </p>
                <p class="font-semibold text-[var(--dark-text)] text-sm">Martín B. (Viña del Mar)</p>
              </div>
            </div>
          </div>
        </section>
  );
}