export default function Hero() {
  return (
    <section
      className="relative py-20 px-6 md:px-10 md:py-32 bg-gradient-to-br from-[var(--soft-blue)] to-[var(--warm-beige)]">
      <div className="absolute inset-0 opacity-20"
        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAEQJOprlJq5mEza32QJoVy6WPVmaZXQ6dva8EsANKT4Mm_cQtSE5HDI4k1iDRcPHkmO1qQmjI-mr8C_R4ZlfVwQOb0uyIVO0KGujw2A2f0Msr1IpWnzECpYksubBITeLAsfKlt1YYb9r2adskBbq09ga4fixq6MA1HPB4PbT7cCvuN70-vFaCg7lXK80eKaqDBwDSUhwruanN7N1f5QWpyhh30pV0qPVFi8FkHD2zzb4Ov7hRsCx70qoVcBR-iYp6ao2kT1HgHYI8")', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      </div>
      <div className="relative max-w-3xl mx-auto text-center">
        <h1
          className="text-5xl font-extrabold leading-tight tracking-tighter text-[var(--dark-text)] sm:text-6xl md:text-7xl">
          Encuentra Tu <span className="text-[var(--accent-blue)]">Equilibrio</span> con Pilates en Chile
        </h1>
        <p className="mt-8 text-xl leading-relaxed text-[var(--medium-text)] sm:text-2xl">
          Descubre el poder transformador del Pilates con nuestro curso introductorio. Fortalece tu cuerpo, calma tu
          mente y mejora tu bienestar general. Clases en Santiago y principales regiones de Chile.
        </p>
        <div className="mt-12">
          <button
            className="flex w-full sm:w-auto min-w-[200px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-10 bg-[var(--accent-blue)] text-white text-lg font-semibold tracking-wide shadow-xl hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mx-auto">
            <span className="truncate">Inscríbete al Curso Ahora</span>
          </button>
        </div>
      </div>
    </section>
  );
}