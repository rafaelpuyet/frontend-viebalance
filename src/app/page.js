import Header from '@components/Header';
import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import HeroIMG from '@public/hero.png';
import StudioIMG from '@public/reformer.png';

export const metadata = {
  title: 'Vie Balance | Pilates Reformer y Elastic Training en Las Condes',
  description: 'Estudio de Pilates Reformer y Elastic Training en Las Condes, Santiago. Clases con Tamara Puyet, kinesióloga especializada.',
  keywords: 'Pilates Las Condes, Elastic Training Las Condes, Pilates Reformer Santiago, kinesióloga, ejercicio Las Condes',
  openGraph: {
    title: 'Vie Balance | Pilates Reformer y Elastic Training en Las Condes',
    description: 'Estudio de Pilates Reformer y Elastic Training en Las Condes, Santiago. Clases con enfoque profesional.',
    url: 'https://viebalance.cl',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', alt: 'Estudio Vie Balance Las Condes', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vie Balance | Pilates Reformer y Elastic Training en Las Condes',
    description: 'Estudio de Pilates Reformer y Elastic Training en Las Condes con enfoque profesional.',
    images: ['/images/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-cream-white)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=http://www.w3.org/2000/svg><g fill=none fill-rule=evenodd><g fill=%23a1a075 fill-opacity=0.3><circle cx=20 cy=20 r=1.5/></g></g></svg>")', 
            backgroundSize: '40px 40px' 
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6" style={{ color: 'var(--color-dark-text)' }}>
              <span className="block" style={{ color: 'var(--color-soft-salmon)' }}>Pilates</span>
              &
              <span className="block" style={{ color: 'var(--color-olive-green)' }}>Elastic Training</span>
            </h1>
            
            <p className="text-lg mb-8 leading-relaxed" style={{ color: 'var(--color-medium-text)' }}>
              Clases de Pilates y Elastic Training diseñadas para fortalecer tu cuerpo de manera progresiva. 
              Con <strong>Tamara Puyet</strong>, kinesióloga con formación certificada en ambas disciplinas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="/clase-gratis" className="group px-8 py-4 rounded-lg font-medium transition-all duration-300 text-white shadow-md hover:shadow-lg" style={{ backgroundColor: 'var(--color-olive-green)' }}>
                <span className="flex items-center justify-center">
                  Clase GRATIS
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              
              <Link href="#disciplinas" className="px-8 py-4 rounded-lg font-medium transition-all duration-300 border-2" style={{ 
                borderColor: 'var(--color-olive-green)', 
                color: 'var(--color-olive-green)' 
              }}>
                Ver disciplinas
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-2xl opacity-20" style={{ backgroundColor: 'var(--color-terracotta)' }}></div>
            <Image
              src={HeroIMG}
              className="relative rounded-2xl shadow-lg w-full h-[450px] lg:h-[500px] object-cover"
              alt="Clases de Elastic Training y Pilates en Vie Balance"
              placeholder="blur"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src={StudioIMG}
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              alt="Estudio Vie Balance en Las Condes"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight" style={{ color: 'var(--color-dark-text)' }}>
              Ejercicio con <span style={{ color: 'var(--color-terracotta)' }}>propósito</span>
            </h2>
            
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--color-medium-text)' }}>
              Vie Balance es un estudio donde combinamos dos disciplinas complementarias: Pilates y Elastic Training. 
              No buscamos rutinas extremas, sino ejercicio inteligente y adaptado.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--color-terracotta)' }}></div>
                <span style={{ color: 'var(--color-medium-text)' }}>Programas adaptados individualmente</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: 'var(--color-terracotta)' }}></div>
                <span style={{ color: 'var(--color-medium-text)' }}>Seguimiento del progreso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Section */}
      <section id="disciplinas" className="py-16 px-6 bg-cream-beige">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-dark-text">
              Nuestras Disciplinas
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-medium-text">
              Entrenamiento Elástico y Pilates Reformer: movimiento dinámico y personalizado para transformar tu cuerpo en Las Condes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Elastic Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-accent-orange">
                <span className="material-icons-outlined text-white">fitness_center</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-dark-text">
                Elastic Training
              </h3>
              
              <p className="mb-6 leading-relaxed text-medium-text">
                Revoluciona tu fitness con este método brasileño que combina cuerdas elásticas, movimientos funcionales y diversión. Siente la libertad de saltar y moverte como si volaras, mientras tonificas, mejoras tu equilibrio y cuidas tus articulaciones. Perfecto para todos los niveles en nuestro estudio en Las Condes.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-light-text">
                  <span className="w-1.5 h-1.5 rounded-full mr-3 bg-accent-orange"></span>
                  Tonificación sin impacto articular
                </div>
                <div className="flex items-center text-sm text-light-text">
                  <span className="w-1.5 h-1.5 rounded-full mr-3 bg-accent-orange"></span>
                  Mejora de equilibrio y coordinación
                </div>
                <div className="flex items-center text-sm text-light-text">
                  <span className="w-1.5 h-1.5 rounded-full mr-3 bg-accent-orange"></span>
                  Quema calórica intensa y divertida
                </div>
              </div>
              <Link
                href="/elastic-training"
                className="text-accent-orange hover:underline"
              >
                Descubre Elastic Training
              </Link>
            </div>
            
            {/* Pilates */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-terracotta">
                <span className="material-icons-outlined text-white">self_improvement</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-dark-text">
                Pilates
              </h3>
              
              <p className="mb-6 leading-relaxed text-medium-text">
                Pilates clásico utilizando equipos especializados. Se enfoca en el control del movimiento, 
                la estabilización del core y la mejora de patrones de movimiento funcionales.
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-light-text">
                  <span className="w-1.5 h-1.5 rounded-full mr-3 bg-terracotta"></span>
                  Fortalecimiento del core y estabilizadores
                </div>
                <div className="flex items-center text-sm text-light-text">
                  <span className="w-1.5 h-1.5 rounded-full mr-3 bg-terracotta"></span>
                  Mejora de la postura y alineación
                </div>
                <div className="flex items-center text-sm text-light-text">
                  <span className="w-1.5 h-1.5 rounded-full mr-3 bg-terracotta"></span>
                  Aumento de flexibilidad y movilidad
                </div>
              </div>
              <Link
                href="/pilates"
                className="text-accent-orange hover:underline"
              >
                Más sobre Pilates Reformer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-text)' }}>
              En qué te puede ayudar
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-medium-text)' }}>
              Objetivos reales que puedes lograr con trabajo consistente y guía profesional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-grayish-green)' }}>
                <span className="material-icons-outlined text-white text-2xl">accessibility_new</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-dark-text)' }}>
                Mejora postural
              </h3>
              <p style={{ color: 'var(--color-medium-text)' }}>
                Trabajo específico para corregir desequilibrios musculares y mejorar la alineación corporal.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-soft-salmon)' }}>
                <span className="material-icons-outlined text-white text-2xl">trending_up</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-dark-text)' }}>
                Fortalecimiento
              </h3>
              <p style={{ color: 'var(--color-medium-text)' }}>
                Desarrollo de fuerza muscular enfocada en movimientos funcionales y estabilidad.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'var(--color-dusty-pink)' }}>
                <span className="material-icons-outlined text-white text-2xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-dark-text)' }}>
                Conciencia corporal
              </h3>
              <p style={{ color: 'var(--color-medium-text)' }}>
                Aprender a reconocer y corregir patrones de movimiento inadecuados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6" style={{ backgroundColor: 'var(--color-cream-beige)' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-text)' }}>
              Cómo trabajamos
            </h2>
            <p className="text-lg" style={{ color: 'var(--color-medium-text)' }}>
              Un proceso estructurado para obtener los mejores resultados.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--color-olive-green)' }}>
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-dark-text)' }}>
                  Evaluación inicial
                </h3>
                <p style={{ color: 'var(--color-medium-text)' }}>
                  Análisis de tu condición física actual, historial de lesiones y objetivos. Incluye evaluación postural básica.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--color-terracotta)' }}>
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-dark-text)' }}>
                  Programa adaptado
                </h3>
                <p style={{ color: 'var(--color-medium-text)' }}>
                  Diseño de rutinas que combinen ambas disciplinas según tus necesidades y nivel de condición física.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0" style={{ backgroundColor: 'var(--color-dusty-pink)' }}>
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--color-dark-text)' }}>
                  Seguimiento y ajustes
                </h3>
                <p style={{ color: 'var(--color-medium-text)' }}>
                  Monitoreo del progreso y modificación del programa según tu evolución y feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: 'var(--color-dark-text)' }}>
              Lo que dicen nuestros alumnos
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--color-cream-white)' }}>
              <p className="mb-4 italic" style={{ color: 'var(--color-medium-text)' }}>
                "He mejorado mi postura después de años de trabajo de oficina. Las clases son exigentes pero 
                siempre adaptadas a lo que puedo hacer. Tamara es muy profesional."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'var(--color-olive-green)' }}>
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-dark-text)' }}>Patricia</div>
                  <div className="text-sm" style={{ color: 'var(--color-light-text)' }}>Arquitecta</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'var(--color-cream-white)' }}>
              <p className="mb-4 italic" style={{ color: 'var(--color-medium-text)' }}>
                "Llegué sin experiencia en ejercicio y aquí encontré un espacio donde puedo entrenar sin presión. 
                He ganado fuerza y confianza en mi cuerpo."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: 'var(--color-terracotta)' }}>
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold" style={{ color: 'var(--color-dark-text)' }}>Mercedes</div>
                  <div className="text-sm" style={{ color: 'var(--color-light-text)' }}>Contadora</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Final CTA */}
      <section className="py-16 px-6 text-white" style={{ backgroundColor: 'var(--color-dark-moss)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            ¿Quieres probar una clase?
          </h2>
          
          <p className="text-lg mb-8 opacity-90">
            Te invitamos a conocer nuestro estudio y experimentar cómo trabajamos. 
            Primera clase con evaluación incluida.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/clase-gratis" className="bg-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl" style={{ color: 'var(--color-dark-moss)' }}>
              Agendar clase GRATIS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}