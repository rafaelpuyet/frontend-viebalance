"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Dynamically toggle 'menu-open' class on body for mobile menu padding
  useEffect(() => {
    document.body.classList.toggle("menu-open", isMenuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full" style={{ backgroundColor: 'var(--color-cream-white)' }}>
        <div className="shadow-sm backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
            <Link href="/" aria-label="Inicio de Vie Balance">
              <div className="flex items-center space-x-3">
                <img
                  alt="Logo de Vie Balance"
                  className="h-10 w-10 rounded-lg object-cover"
                  style={{ borderColor: 'var(--color-terracotta)', borderWidth: '1px' }}
                  src="/logo.png"
                  loading="lazy"
                />
                <div>
                  <h1 className="text-xl font-bold" style={{ color: 'var(--color-dark-moss)' }}>
                    Vie Balance
                  </h1>
                  <p className="text-xs" style={{ color: 'var(--color-light-text)' }}>
                    Pilates Reformer y Elastic Training
                  </p>
                </div>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-6 items-center">
              <Link
                href="/elastic-training"
                className="transition-colors duration-200"
                style={{ 
                  color: 'var(--color-medium-text)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-orange)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-medium-text)'}
              >
                Elastic Training
              </Link>
              <Link
                href="/pilates"
                className="transition-colors duration-200"
                style={{ 
                  color: 'var(--color-medium-text)',
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-orange)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--color-medium-text)'}
              >
                Pilates
              </Link>
              <Link
                href="/clase-gratis"
                className="px-4 py-2 rounded-full text-white transition-colors duration-200"
                style={{ backgroundColor: 'var(--color-accent-orange)' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-terracotta)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-accent-orange)'}
              >
                Clase Gratis
              </Link>
            </nav>
            
            <button
              className="md:hidden"
              style={{ color: 'var(--color-medium-text)' }}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMenuOpen}
            >
              <span className="material-icons-outlined text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav 
            className="md:hidden shadow-lg border-t border-gray-100"
            style={{ backgroundColor: 'var(--color-cream-white)' }}
          >
            <div className="px-6 py-4">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    href="/elastic-training"
                    className="block py-2 transition-colors duration-200"
                    style={{ color: 'var(--color-medium-text)' }}
                    onClick={toggleMenu}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-medium-text)'}
                  >
                    Elastic Training
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pilates"
                    className="block py-2 transition-colors duration-200"
                    style={{ color: 'var(--color-medium-text)' }}
                    onClick={toggleMenu}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-medium-text)'}
                  >
                    Pilates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/clase-gratis"
                    className="block py-2 transition-colors duration-200"
                    style={{ color: 'var(--color-medium-text)' }}
                    onClick={toggleMenu}
                    onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-orange)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--color-medium-text)'}
                  >
                    Clase Gratis
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}