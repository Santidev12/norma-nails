import React from 'react';
import { CheckCircle, Calendar, Clock, Mail, Sparkles, Home } from 'lucide-react';
import { Service } from '../types';

interface BookingConfirmationProps {
  selectedService: Service;
  selectedDate: Date;
  selectedTime: string;
  clientName: string;
  clientEmail: string;
  onNewBooking: () => void;
}

export const BookingConfirmation: React.FC<BookingConfirmationProps> = ({
  selectedService,
  selectedDate,
  selectedTime,
  clientName,
  clientEmail,
  onNewBooking
}) => {
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
    <div className="space-y-8">
      {/* Header de confirmación */}
      <div className="text-center">
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          ¡Reserva Confirmada!
        </h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Tu cita ha sido agendada exitosamente. Hemos enviado los detalles a tu email.
        </p>
      </div>

      {/* Detalles de la cita */}
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header con gradiente */}
        <div className="bg-linear-to-r from-beige-300 to-beige-500 text-white p-6">
          <h3 className="text-xl font-semibold text-center">
            Detalles de tu Cita
          </h3>
        </div>

        {/* Contenido */}
        <div className="p-6 space-y-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Sparkles className="w-5 h-5 text-beige-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{selectedService.name}</p>
              <p className="text-sm text-gray-600">{selectedService.duration} minutos</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Calendar className="w-5 h-5 text-beige-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 capitalize">
                {formatDate(selectedDate)}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Clock className="w-5 h-5 text-beige-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">
                {formatTime(selectedTime)}
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-4">
              <Mail className="w-5 h-5 text-beige-600" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{clientName}</p>
              <p className="text-sm text-gray-600">{clientEmail}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <div className="rounded-xl p-4 border border-beige-200">
          <h4 className="font-semibold text-beige-800 mb-2">Recordatorio importante</h4>
          <p className="text-sm text-beige-700">
            Por favor procura llegar <strong>5 minutos antes</strong> a tu cita y, si necesitas
            cancelarla, hazlo con al menos <strong>24 horas de anticipación</strong>.
          </p>
        </div>
      </div>


      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <button
          onClick={onNewBooking}
          className="flex-1 bg-white border-2 border-beige-500 text-beige-500 py-3 px-6 rounded-xl font-semibold hover:bg-beige-50 transition-colors"
        >
          Nueva Reserva
        </button>

        <button
          onClick={() => window.location.href = '/'}
          className="flex-1 bg-linear-to-r from-beige-500 to-beige-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center"
        >
          <Home className="w-4 h-4 mr-2" />
          Inicio
        </button>
      </div>
    </div>
  );
};