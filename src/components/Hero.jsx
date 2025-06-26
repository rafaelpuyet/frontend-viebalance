"use client"
import Image from 'next/image'
import Link from 'next/link'
import HeroIMG from '@public/hero.png'

export default function Hero() {
  return (
    <section className="relative py-10 px-6 lg:px-8 bg-cream-gradient">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg><g fill=none fill-rule=evenodd><g fill-opacity=0.1><circle cx=30 cy=30 r=3/></g></g></svg>")', backgroundSize: '60px 60px' }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforma tu Cuerpo con <span className="text-accent-orange">Elastic Training</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-lg">
              Descubre el método brasileño que está revolucionando el fitness: entrenamientos únicos con arnés y elásticos que esculpen tu cuerpo, potencian tu fuerza y despiertan tu mejor versión desde la primera clase.
            </p>
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Resultados visibles desde el primer mes</h3>
                  <p className="text-gray-600 text-sm">Tonifica, fortalece y define tu figura con ejercicios únicos y efectivos</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Cero impacto, máximo beneficio</h3>
                  <p className="text-gray-600 text-sm">Cuida tus articulaciones mientras mejoras postura y flexibilidad</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-cream-beige rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-dark-moss" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-1">Comunidad motivadora y energética</h3>
                  <p className="text-gray-600 text-sm">Entrena rodeada de mujeres que comparten tus objetivos y celebran tus logros</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/trial-class" className="flex-1 bg-accent-orange hover:bg-terracotta text-white font-semibold py-4 px-6 rounded-full transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                ¡Reserva tu Clase GRATIS!
              </Link>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="relative">
              <Image
                src={HeroIMG}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover border-terracotta"
                alt="Estudio Vie Balance - Elastic Training en Las Condes"
                placeholder="blur"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}