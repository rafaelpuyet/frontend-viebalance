import Header from '@components/Header';
import Hero from '@components/Hero';
import Course from '@components/Course';
import AboutInstructor from '@components/AboutInstructor';
import Testimonials from '@components/Testimonials';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Clases de Pilates y Entrenamiento Elástico en Las Condes | Vie Balance',
  description: 'Únete a Vie Balance en Las Condes, Santiago, para clases personalizadas de Pilates Reformer y Entrenamiento Elástico. ¡Reserva tu clase gratis hoy!',
  openGraph: {
    title: 'Clases de Pilates y Entrenamiento Elástico en Las Condes | Vie Balance',
    description: 'Transforma tu cuerpo con Pilates Reformer y Entrenamiento Elástico en Las Condes. ¡Prueba gratis!',
    url: 'https://viebalance.cl',
    images: [{ url: '/images/og-image.jpg', alt: 'Estudio Vie Balance Las Condes' }],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <section className="py-16 px-6 bg-cream-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestras Disciplinas</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Entrenamiento Elástico</h3>
            <p className="text-gray-700 mb-4">Método brasileño innovador que usa elásticos para tonificar, fortalecer y mejorar postura sin impacto.</p>
            <Link href="/entrenamiento-elastico-las-condes" className="text-accent-orange hover:underline">Más sobre Entrenamiento Elástico</Link>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pilates Reformer</h3>
            <p className="text-gray-700 mb-4">Clases personalizadas con Tamara Puyet para fortalecer el core, mejorar postura y aumentar bienestar.</p>
            <Link href="/pilates-reformer-las-condes" className="text-accent-orange hover:underline">Más sobre Pilates Reformer</Link>
          </div>
        </div>
      </section>
      <Course />
      <AboutInstructor />
      <Testimonials />
      <ContactForm />
      <section className="py-16 px-6 bg-cream-beige text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Comienza Hoy</h2>
        <Link href="/clase-gratis" className="bg-accent-orange text-white px-6 py-3 rounded-full hover:bg-terracotta">
          Reserva tu Clase Gratis
        </Link>
      </section>
      <Footer />
    </>
  );
}