import React, { useState } from 'react';
import { User, Mail, Calendar, Clock, Sparkles, Loader2 } from 'lucide-react';
import { Service } from '../types';

interface BookingFormProps {
  selectedService: Service;
  selectedDate: Date;
  selectedTime: string;
  clientName: string;
  clientEmail: string;
  onClientDataChange: (name: string, email: string) => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedService,
  selectedDate,
  selectedTime,
  clientName,
  clientEmail,
  onClientDataChange,
  onConfirm,
  isLoading
}) => {
  const [errors, setErrors] = useState<{name?: string; email?: string}>({});

  const validateForm = () => {
    const newErrors: {name?: string; email?: string} = {};
    
    if (!clientName.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (clientName.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    if (!clientEmail.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail)) {
      newErrors.email = 'Ingresa un email válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onConfirm();
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:${minutes} ${period}`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Confirma tu Reserva
        </h2>
        <p className="text-gray-600">
          Revisa los detalles y completa tus datos para finalizar
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        {/* Resumen de la reserva */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6 border border-pink-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Sparkles className="w-5 h-5 text-pink-500 mr-2" />
            Resumen de tu Cita
          </h3>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-700">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <Sparkles className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">{selectedService.name}</p>
                <p className="text-sm text-gray-500">{selectedService.duration} minutos</p>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <Calendar className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium capitalize">{formatDate(selectedDate)}</p>
              </div>
            </div>

            <div className="flex items-center text-gray-700">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                <Clock className="w-4 h-4 text-pink-600" />
              </div>
              <div>
                <p className="font-medium">{formatTime(selectedTime)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulario de datos del cliente */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Nombre Completo *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                value={clientName}
                onChange={(e) => {
                  onClientDataChange(e.target.value, clientEmail);
                  if (errors.name) setErrors(prev => ({...prev, name: undefined}));
                }}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Tu nombre completo"
                disabled={isLoading}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                value={clientEmail}
                onChange={(e) => {
                  onClientDataChange(clientName, e.target.value);
                  if (errors.email) setErrors(prev => ({...prev, email: undefined}));
                }}
                className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="tu@email.com"
                disabled={isLoading}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Información importante */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Información Importante:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Recibirás una confirmación por email</li>
              <li>• Te enviaremos un recordatorio 24 horas antes</li>
              <li>• Por favor llega 5 minutos antes de tu cita</li>
            </ul>
          </div>

          {/* Botón de confirmación */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                Procesando Reserva...
              </div>
            ) : (
              'Confirmar Reserva'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};