"use client"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 z-50 bg-cream-white shadow-sm backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/">
          <div className="flex items-center space-x-3">
            <img alt="Vie Balance Logo" className="h-10 w-10 rounded-lg object-cover border-terracotta" src="/logo.png" loading="lazy" />
            <div>
              <h1 className="text-xl font-bold text-dark-moss">Vie Balance</h1>
              <p className="text-xs text-gray-600">Estudio de Elastic Training - Pilates</p>
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-accent-orange">Inicio</Link>
          <Link href="/elastic-training" className="text-gray-700 hover:text-accent-orange">Elastic Training</Link>
          <Link href="/pilates" className="text-gray-700 hover:text-accent-orange">Pilates</Link>
          <Link href="/trial-class" className="bg-accent-orange text-white px-4 py-2 rounded-full hover:bg-terracotta">Clase Gratis</Link>
        </nav>
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <span className="material-icons-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-cream-white px-6 py-4">
          <ul className="flex flex-col space-y-4">
            <li><Link href="/" className="text-gray-700 hover:text-accent-orange" onClick={toggleMenu}>Inicio</Link></li>
            <li><Link href="/elastic-training" className="text-gray-700 hover:text-accent-orange" onClick={toggleMenu}>Elastic Training</Link></li>
            <li><Link href="/pilates" className="text-gray-700 hover:text-accent-orange" onClick={toggleMenu}>Pilates</Link></li>
            <li><Link href="/clase-gratis" className="text-gray-700 hover:text-accent-orange" onClick={toggleMenu}>Clase Gratis</Link></li>
          </ul>
        </nav>
      )}
    </header>
  )
}