export default function Testimonials() {
  return (
    <section className="py-20 bg-cream-white">
      <div className="container mx-auto px-6 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">Lo que Dicen Nuestros Alumnos en Vie Balance</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <blockquote className="bg-golden-beige p-8 rounded-xl shadow-lg hover-scale border-terracotta">
            <div className="flex mb-4">
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
            </div>
            <p className="italic text-lg mb-4 text-gray-700">"Las clases de Elastic Training con Tamara en Las Condes transformaron mi cuerpo. Me siento más fuerte y mi dolor de espalda casi desapareció. ¡Tamara es increíble!"</p>
            <footer className="font-semibold text-gray-900">– Sofía C., Las Condes, Santiago</footer>
          </blockquote>
          <blockquote className="bg-golden-beige p-8 rounded-xl shadow-lg hover-scale border-terracotta">
            <div className="flex mb-4">
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
              <span className="material-icons-outlined text-yellow-500 text-xl" aria-label="5 estrellas">star</span>
            </div>
            <p className="italic text-lg mb-4 text-gray-700">"La clase gratuita de Elastic Training con Tamara superó mis expectativas. Es dinámico y efectivo. ¡100% recomendado!"</p>
            <footer className="font-semibold text-gray-900">– Martín B., Las Condes, Santiago</footer>
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
              "reviewBody": "Las clases de Elastic Training con Tamara en Las Condes transformaron mi cuerpo. Me siento más fuerte y mi dolor de espalda casi desapareció. ¡Tamara es increíble!",
              "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "Vie Balance Elastic Training Studio"
              }
            }
          `}
        </script>
      </div>
    </section>
  );
}