export default function Footer() {
  return (
    <footer className="bg-cream-beige text-medium-text py-10 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img alt="Vie Balance Logo" className="h-10 w-10 rounded-lg object-cover"
            src="/logo.png" loading="lazy" />
          <h3 className="text-2xl font-bold text-dark-moss">Vie Balance</h3>
        </div>
        <p className="text-sm mb-2">Nutriendo mente y cuerpo a través del arte del Pilates en Las Condes.</p>
        <p className="text-sm mb-6">
          Correo electrónico: <a className="hover:text-terracotta transition-colors"
            href="mailto:info@viebalance.cl">info@viebalance.cl</a>
        </p>
        <div className="flex justify-center space-x-4 mb-6">
          <a className="text-medium-text hover:text-terracotta transition-colors" href="#">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fillRule="evenodd"></path>
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <a className="text-medium-text hover:text-terracotta transition-colors" href="#">
            <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path clipRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.255 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.023.047 1.351.058 3.807.058h.468c2.456 0 2.784-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.023.058-1.351.058-3.807v-.468c0-2.456-.011-2.784-.058-3.807-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"
                fillRule="evenodd"></path>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </div>
        <p className="text-xs">© 2025 Vie Balance. Todos los derechos reservados. <a
            className="hover:text-terracotta transition-colors" href="#">Política de Privacidad</a> | <a
            className="hover:text-terracotta transition-colors" href="#">Términos de Servicio</a></p>
      </div>
    </footer>
  );
}