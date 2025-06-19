'use client';
import { useState } from 'react';

export default function TrialClassForm() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    source: 'instagram',
    preferred_time: 'morning',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    const newErrors = { ...errors };
    if (name === 'first_name' && value.trim().length < 2) {
      newErrors.first_name = 'El nombre debe tener al menos 2 caracteres';
    } else if (name === 'first_name') {
      delete newErrors.first_name;
    }
    if (name === 'last_name' && value.trim().length < 2) {
      newErrors.last_name = 'El apellido debe tener al menos 2 caracteres';
    } else if (name === 'last_name') {
      delete newErrors.last_name;
    }
    if (name === 'email' && !/^[^\s@]+@([^\s@.,]+\.)+[^\s@,.]{2,}$/.test(value)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    } else if (name === 'email') {
      delete newErrors.email;
    }
    if (name === 'phone' && !/^\d{8,9}$/.test(value.replace(/\s/g, ''))) {
      newErrors.phone = 'Ingresa un número de teléfono válido (8-9 dígitos)';
    } else if (name === 'phone') {
      delete newErrors.phone;
    }
    if (name === 'preferred_time' && !['morning', 'afternoon'].includes(value)) {
      newErrors.preferred_time = 'Selecciona un horario válido';
    } else if (name === 'preferred_time') {
      delete newErrors.preferred_time;
    }
    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length > 0) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: `+56${formData.phone.replace(/\s/g, '')}`,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          source: 'instagram',
          preferred_time: 'morning',
        });
      } else {
        setIsSubmitting(false);
        alert(data.error || 'Error al enviar el formulario. Intenta de nuevo.');
      }
    } catch (error) {
      setIsSubmitting(false);
      alert('Error al enviar el formulario. Intenta de nuevo.');
    }
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  value={formData.first_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border border-cream-white rounded-xl shadow-sm focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-200 text-gray-900 placeholder-gray-400 ${
                    errors.first_name ? 'border-red-500' : ''
                  }`}
                  placeholder="Tu nombre"
                  aria-describedby={errors.first_name ? 'first_name-error' : undefined}
                />
                {errors.first_name && (
                  <p id="first_name-error" className="text-red-500 text-xs mt-1">
                    {errors.first_name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-semibold text-gray-900 mb-2"
                >
                  Apellido *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  value={formData.last_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border border-cream-white rounded-xl shadow-sm focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-200 text-gray-900 placeholder-gray-400 ${
                    errors.last_name ? 'border-red-500' : ''
                  }`}
                  placeholder="Tu apellido"
                  aria-describedby={errors.last_name ? 'last_name-error' : undefined}
                />
                {errors.last_name && (
                  <p id="last_name-error" className="text-red-500 text-xs mt-1">
                    {errors.last_name}
                  </p>
                )}
              </div>
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
                className={`w-full px-4 py-3 bg-white border border-cream-white rounded-xl shadow-sm focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-200 text-gray-900 placeholder-gray-400 ${
                  errors.email ? 'border-red-500' : ''
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
              <div className="flex items-center">
                <span className="inline-flex items-center px-4 py-3 bg-gray-100 border border-r-0 border-cream-white rounded-l-xl text-gray-900 text-sm">
                  +56
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white border border-cream-white rounded-r-xl shadow-sm focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-200 text-gray-900 placeholder-gray-400 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="912345678"
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                />
              </div>
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
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-200 appearance-none ${
                  errors.source ? 'border-red-500' : ''
                }`}
              >
                <option value="instagram">Instagram</option>
                <option value="google">Google</option>
                <option value="recomendacion">Recomendación de un amigo</option>
                <option value="facebook">Facebook</option>
                <option value="otro">Otro</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="preferred_time"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Horario Preferido *
              </label>
              <select
                id="preferred_time"
                name="preferred_time"
                value={formData.preferred_time}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-gray-900 focus:ring-2 focus:ring-accent-orange focus:border-accent-orange transition-all duration-200 appearance-none ${
                  errors.preferred_time ? 'border-red-500' : ''
                }`}
              >
                <option value="morning">Mañana</option>
                <option value="afternoon">Tarde</option>
              </select>
              {errors.preferred_time && (
                <p id="preferred_time-error" className="text-red-500 text-xs mt-1">
                  {errors.preferred_time}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className="w-full h-14 bg-accent-orange text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-terracotta transition-all duration-200 flex items-center justify-center"
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