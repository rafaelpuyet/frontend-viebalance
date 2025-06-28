import Head from 'next/head';
import Header from '@components/Header';
import TrialClassForm from '@components/TrialClassForm';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Reserva tu Clase Gratuita de Pilates o Elastic Training - Vie Balance',
  description: 'Reserva tu clase gratuita de Pilates o Elastic Training en Vie Balance, Las Condes. Experimenta una sesión personalizada con Tamara Puyet.',
  keywords: 'Pilates Las Condes, Elastic Training Las Condes, clase gratuita, Vie Balance, Tamara Puyet, fitness Las Condes, bienestar',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  openGraph: {
    title: 'Reserva tu Clase Gratuita de Pilates o Elastic Training - Vie Balance',
    description: 'Prueba una clase gratuita de Pilates o Elastic Training en Las Condes con Tamara Puyet.',
    url: 'https://www.viebalance.cl/clase-gratis',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', alt: 'Clase Gratuita en Vie Balance, Las Condes', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reserva tu Clase Gratuita de Pilates o Elastic Training - Vie Balance',
    description: 'Prueba una clase gratuita de Pilates o Elastic Training en Las Condes.',
    images: ['/images/og-image.jpg'],
  },
};

export default function TrialClassPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />
        <link rel="canonical" href="https://www.viebalance.cl/clase-gratis" />
      </Head>
      <Header />
      <TrialClassForm />
      <Footer />
    </>
  );
}