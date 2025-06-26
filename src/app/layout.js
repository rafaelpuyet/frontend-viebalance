import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'] });
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Clases de Pilates en Las Condes, Santiago | Vie Balance Pilates Studio',
  description: 'Únete a Vie Balance en Las Condes, Santiago, para clases de Pilates personalizadas. Regístrate para una prueba gratuita con Tamara Puyet hoy.',
    icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Clases de Pilates en Las Condes | Vie Balance',
    description: 'Transforma tu salud con Pilates en Las Condes. Prueba gratuita con Tamara Puyet.',
    url: 'https://viebalance.cl',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', alt: 'Vie Balance Pilates Studio Las Condes' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clases de Pilates en Las Condes | Vie Balance',
    description: 'Pilates para principiantes en Las Condes, Santiago. Reserva tu prueba gratuita.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <head>
        <meta name="keywords" content="clases de Pilates Las Condes, Pilates Santiago, Pilates para principiantes, Vie Balance, Tamara Puyet" />
        <meta name="author" content="Vie Balance Pilates Studio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Vie Balance Pilates Studio",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chesterton 8039",
              "addressLocality": "Las Condes, Santiago",
              "addressRegion": "Región Metropolitana",
              "postalCode": "7560356",
              "addressCountry": "CL"
            },
            "telephone": "+56 9 8765 4321",
            "email": "info@viebalance.cl",
            "url": "https://viebalance.cl",
            "image": "https://viebalance.cl/images/og-image.jpg",
            "description": "Estudio de Pilates en Las Condes, Santiago, con clases personalizadas lideradas por Tamara Puyet."
          })}
        </script>
      </head>
      <body className={`${lato.className} bg-white text-gray-800 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}