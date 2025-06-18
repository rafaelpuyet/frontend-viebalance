'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'clase-gratuita'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    if (name === 'name' && value.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    } else if (name === 'name') {
      delete newErrors.name;
    }
    if (name === 'email' && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@,.]{2,}$/.test(value)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    } else if (name === 'email') {
      delete newErrors.email;
    }
    if (name === 'phone' && !/^\+?\d{8,12}$/.test(value.replace(/\s/g, ''))) {
      newErrors.phone = 'Ingresa un número de teléfono válido';
    } else if (name === 'phone') {
      delete newErrors.phone;
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'clase-gratuita'
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validateField(name, value);
  };

  if (showSuccess) {
    return (
      <section className="py-16 px-6 md:px-10 bg-gradient-to-br from-light-pink to-soft-salmon" id="contacto">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-cream-white rounded-xl shadow-2xl p-8">
            <span className="material-icons-outlined text-terracotta text-6xl mb-4 block">check_circle</span>
            <h2 className="text-3xl font-bold text-dark-moss mb-4">¡Perfecto!</h2>
            <p className="text-lg text-medium-text mb-6">
              Hemos recibido tu solicitud. Tamara se contactará contigo en las próximas 24 horas para coordinar tu clase gratuita.
            </p>
            <div className="bg-light-blue rounded-lg p-4">
              <p className="text-sm text-dark-moss">
                <span className="material-icons-outlined text-sm mr-1">info</span>
                Mientras tanto, puedes llamarnos al <strong>+56 9 8765 4321</strong> si tienes alguna pregunta urgente.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-10 bg-gradient-to-br from-light-blue to-cream-beige" id="contacto">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-dark-moss sm:text-4xl mb-4">
            Reserva Tu Clase Gratuita
          </h2>
          <p className="text-lg text-medium-text max-w-2xl mx-auto">
            Experimenta los beneficios del Pilates terapéutico con Tamara. La primera clase es completamente gratuita y sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-cream-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-dark-moss mb-6">Información de Contacto</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-4 mt-1">location_on</span>
                <div>
                  <h4 className="font-semibold text-dark-moss">Ubicación</h4>
                  <p className="text-medium-text">Chesterton 8039, Las Condes<br />Santiago, Región Metropolitana</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-4 mt-1">phone</span>
                <div>
                  <h4 className="font-semibold text-dark-moss">Teléfono</h4>
                  <a href="tel:+56987654321" className="text-terracotta hover:underline">
                    +56 9 8765 4321
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-4 mt-1">email</span>
                <div>
                  <h4 className="font-semibold text-dark-moss">Email</h4>
                  <a href="mailto:info@viebalance.cl" className="text-terracotta hover:underline">
                    info@viebalance.cl
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="material-icons-outlined text-terracotta mr-4 mt-1">schedule</span>
                <div>
                  <h4 className="font-semibold text-dark-moss">Horarios</h4>
                  <p className="text-medium-text">
                    Lunes a Viernes: 8:00 - 20:00<br />
                    Sábados: 9:00 - 14:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-cream-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-dark-moss mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tu nombre completo"
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark-moss mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="tu@email.com"
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-dark-moss mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="+56 9 1234 5678"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-dark-moss mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent"
                >
                  <option value="clase-gratuita">Clase de Pilates Gratuita</option>
                  <option value="rehabilitacion">Pilates Terapéutico/Rehabilitación</option>
                  <option value="acondicionamiento">Acondicionamiento Físico</option>
                  <option value="masoterapia">Masoterapia</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-moss mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-transparent resize-none"
                  placeholder="Cuéntanos sobre tus objetivos o cualquier condición específica que debamos considerar..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).length > 0}
                className="w-full h-14 bg-terracotta text-cream-white text-lg font-semibold rounded-lg shadow-lg hover:bg-dark-moss transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-terracotta focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <span className="material-icons-outlined animate-spin mr-2">hourglass_empty</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    <span className="material-icons-outlined mr-2">send</span>
                    Reservar Clase Gratuita
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-light-text mt-4 text-center">
              * Al enviar este formulario, aceptas que Tamara se contacte contigo para coordinar tu clase gratuita.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}