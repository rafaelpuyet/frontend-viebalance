import Head from 'next/head';
import Header from '@components/pilates/Header';
import TrialClassForm from '@components/pilates/TrialClassForm';
import Footer from '@components/pilates/Footer';

export default function TrialClassPage() {
  return (
    <>
      <Head>
        <title>Reserva tu Clase Gratuita de Pilates Reformer - Vie Balance</title>
        <meta
          name="description"
          content="Reserva tu clase gratuita de Pilates Reformer en Vie Balance, Las Condes. Experimenta una sesión personalizada con Tamara y transforma tu bienestar."
        />
        <meta
          name="keywords"
          content="Pilates Reformer, clase gratuita, Vie Balance, Las Condes, Tamara Puyet, fitness, bienestar"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.viebalance.cl/trial-class" />
      </Head>
      <Header />
      <TrialClassForm />
      <Footer />
    </>
  );
}