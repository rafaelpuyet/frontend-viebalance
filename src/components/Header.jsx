"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header className="top-0 z-50 bg-cream-white shadow-sm backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <Link href="/">
          <div className="flex items-center space-x-3">
            <img 
              alt="Vie Balance Logo" 
              className="h-10 w-10 rounded-lg object-cover border-terracotta"
              src="/logo.png" 
              loading="lazy"
            />
            <div>
              <h1 className="text-xl font-bold text-dark-moss">Vie Balance</h1>
              <p className="text-xs text-gray-600">Estudio de Elastic Training - Pilates</p>
            </div>
          </div>
          </Link>
        </div>
      </div>
    </header>
  );
}