import { Manrope, Noto_Sans } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '700'] });
const noto_sans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Vitta Balance Pilates Studio - Clases de Pilates en Chile',
  description: 'Vitta Balance Pilates Studio en Providencia, Santiago, Chile. Curso introductorio de Pilates para principiantes. Reserva tu prueba gratuita de 7 días.',
  openGraph: {
    title: 'Vitta Balance Pilates Studio - Transforma tu Bienestar',
    description: 'Clases de Pilates en Providencia, Santiago. Únete con nuestro curso introductorio y prueba gratuita.',
    url: 'https://vittabalance.cl',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', alt: 'Vitta Balance Pilates Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitta Balance Pilates Studio',
    description: 'Clases de Pilates en Santiago, Chile. Reserva tu prueba gratuita hoy.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CL">
      <head>
        <meta name="keywords" content="Pilates Providencia, Pilates Reformer Santiago, Clases de Pilates Chile, Pilates para principiantes, Vitta Balance" />
        <meta name="author" content="Vitta Balance Pilates Studio" />
        <meta name="robots" content="index, follow" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" rel="stylesheet" />
      </head>
      <body className={`${manrope.className} bg-white text-gray-800 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}