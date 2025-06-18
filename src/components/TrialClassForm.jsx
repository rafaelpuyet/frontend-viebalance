'use client';
import { useState } from 'react';

export default function TrialClassForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    source: 'instagram',
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
        source: 'instagram',
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
      <section className="py-16 px-6 md:px-10 bg-cream-beige min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-cream-white rounded-xl shadow-2xl p-8 border-terracotta">
            <span className="material-icons-outlined text-accent-orange text-6xl mb-4 block">
              check_circle
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">¡Perfecto!</h2>
            <p className="text-lg text-gray-700 mb-6">
              Hemos recibido tu solicitud. Tamara se contactará contigo en las próximas 24 horas para
              coordinar tu clase gratuita.
            </p>
            <div className="bg-golden-beige rounded-lg p-4">
              <p className="text-sm text-gray-900">
                <span className="material-icons-outlined text-sm mr-1">info</span>
                Mientras tanto, puedes llamarnos al <strong>+56 9 8765 4321</strong> si tienes alguna
                pregunta urgente.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 md:px-10 bg-cream-beige min-h-screen flex items-center">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Reserva Tu Clase Gratuita
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Experimenta los beneficios del Pilates Reformer con Tamara. La primera clase es
            completamente gratuita y sin compromiso.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-cream-white rounded-xl shadow-lg p-8 border-terracotta"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-cream-white'
                }`}
                placeholder="Tu nombre completo"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-cream-white'
                }`}
                placeholder="tu@email.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent ${
                  errors.phone ? 'border-red-500' : 'border-cream-white'
                }`}
                placeholder="+56 9 1234 5678"
                aria-describedby={errors.phone ? 'phone-error' : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="source" className="block text-sm font-semibold text-gray-900 mb-2">
                ¿Dónde nos encontraste?
              </label>
              <select
                id="source"
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-cream-white rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
              >
                <option value="instagram">Instagram</option>
                <option value="google">Google</option>
                <option value="recomendacion">Recomendación de un amigo</option>
                <option value="facebook">Facebook</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className="w-full h-14 bg-accent-orange text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-terracotta transition-all duration-200 flex items-center justify-center"
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

          <p className="text-xs text-gray-600 mt-4 text-center">
            * Al enviar este formulario, aceptas que Tamara se contacte contigo para coordinar tu clase
            gratuita.
          </p>
        </form>
      </div>
    </section>
  );
}