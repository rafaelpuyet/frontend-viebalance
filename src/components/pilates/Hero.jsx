"use client"
import Image from 'next/image'
import Link from 'next/link'
import HeroIMG from '@public/hero.png'

export default function Hero() {
  return (
    <section className="relative min-h-screen py-30 px-6 lg:px-8 bg-cream-gradient">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg><g fill=none fill-rule=evenodd><g fill-opacity=0.1><circle cx=30 cy=30 r=3/></g></g></svg>")',
            backgroundSize: '60px 60px'
          }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Estudio de
              <span className="text-accent-orange"> Pilates</span>
              <br />
              reformer y maquinas
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-lg">
              Trabaja de manera integral, activa todo tu cuerpo en cada clase, fortalece tu core y mejora tu postura.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Clases grupales con kinesióloga</h3>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Entrena con la confianza de la experticia profesional. Contamos con clases de Pilates terapéutico dirigidas por una kinesióloga altamente calificada, asegurando que cada movimiento sea preciso, seguro y adaptado a tus necesidades.</h3>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Únete a una comunidad que te impulsa a crecer. En Vie Balance, no solo te unes a un estudio, te conviertes en parte de una comunidad de entusiastas del bienestar. Conéctate, comparte tus logros y siente la motivación de entrenar junto a personas que, como tú, buscan mejorar su calidad de vida, cuerpo y mente.</h3>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Transforma tu rutina en un momento de bienestar. En cada clase de Pilates en Vie Balance, no solo ejercitarás tu cuerpo, sino que te sumergirás en un espacio de conexión con tu mente, respiración y cuerpo. Lo más importante para nosotros como Vie Balance es el placer de moverse con conciencia, liberar tensiones y encontrar el balance que te acompañará después de salir del estudio.</h3>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trial-class"
                className="flex-1 bg-accent-orange hover:bg-terracotta text-white font-semibold py-4 px-6 rounded-full transition-colors duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Reservar Clase de Prueba
              </Link>
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="relative">
              <Image
                src={HeroIMG}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-terracotta"
                alt="Estudio Vie Balance - Pilates Reformer en Las Condes"
                placeholder="blur"
                loading="lazy"
              />
              <div className="absolute bottom-4 right-4 bg-cream-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-500 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-900">4.9/5</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>150+ alumnos</strong> han transformado su cuerpo y bienestar con nuestras clases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}