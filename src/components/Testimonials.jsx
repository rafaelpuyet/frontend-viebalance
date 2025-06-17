export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-soft/10">
      <div className="container mx-auto px-6 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lo que Dicen Nuestros Alumnos de Pilates en Chile</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-white p-8 rounded-xl shadow-lg hover-scale">
            <div className="flex mb-4">
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
            </div>
            <p className="italic text-lg mb-4">"Este curso de Pilates en Santiago cambió mi vida. Me siento más fuerte, flexible y mi dolor de espalda casi desapareció. ¡Elena es la mejor instructora en Providencia!"</p>
            <footer className="font-semibold">– Sofía C., Providencia, Santiago</footer>
          </blockquote>
          <blockquote className="bg-white p-8 rounded-xl shadow-lg hover-scale">
            <div className="flex mb-4">
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
              <span class="material-icons-outlined text-yellow-500 text-xl">star</span>
            </div>
            <p className="italic text-lg mb-4">"Dudaba al principio, pero este curso de Pilates en Viña del Mar superó todas mis expectativas. Es relajante y efectivo. ¡Recomendado para todos en Chile!"</p>
            <footer className="font-semibold">– Martín B., Viña del Mar</footer>
          </blockquote>
        </div>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Sofía C."
              },
              "reviewBody": "Este curso de Pilates en Santiago cambió mi vida. Me siento más fuerte, flexible y mi dolor de espalda casi desapareció. ¡Elena es la mejor instructora en Providencia!",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Vitta Balance Pilates Studio"
              }
            }
          `}
        </script>
      </div>
    </section>
  );
}