import React from 'react';
import { Clock, Loader2 } from 'lucide-react';
import { useCalendar } from '../hooks/useCalendar';

interface TimeSlotPickerProps {
  selectedDate: Date;
  serviceDuration: number;
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
}

export const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  selectedDate,
  serviceDuration,
  selectedTime,
  onTimeSelect
}) => {
  const { timeSlots, isLoading, error } = useCalendar(selectedDate, serviceDuration);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-MX', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Horarios Disponibles
          </h2>
          <p className="text-gray-600 capitalize">
            {formatDate(selectedDate)}
          </p>
        </div>

        <div className="flex items-center justify-center py-12">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin text-beige-800 mx-auto mb-4" />
            <p className="text-gray-600">Cargando horarios disponibles...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Horarios Disponibles
          </h2>
          <p className="text-gray-600 capitalize">
            {formatDate(selectedDate)}
          </p>
        </div>

        <div className="text-center py-12">
          <div className="text-red-500 mb-4">
            <Clock className="w-12 h-12 mx-auto mb-2" />
            <p className="text-lg font-medium">Error al cargar horarios</p>
            <p className="text-sm text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  const availableSlots = timeSlots.filter(slot => slot.available);
  const morningSlots = availableSlots.filter(slot => {
    const hour = parseInt(slot.startTime.split(':')[0]);
    return hour < 14;
  });
  const afternoonSlots = availableSlots.filter(slot => {
    const hour = parseInt(slot.startTime.split(':')[0]);
    return hour >= 14;
  });

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Horarios Disponibles
        </h2>
        <p className="text-gray-600 capitalize">
          {formatDate(selectedDate)}
        </p>
      </div>

      {availableSlots.length === 0 ? (
        <div className="text-center py-12">
          <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-medium text-gray-700 mb-2">
            No hay horarios disponibles
          </h3>
          <p className="text-gray-500">
            Por favor, selecciona otra fecha
          </p>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Horarios de la mañana */}
          {morningSlots.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                Mañana
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {morningSlots.map((slot) => (
                  <button
                    key={slot.startTime}
                    onClick={() => onTimeSelect(slot.startTime)}
                    className={`
                      py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200
                      ${selectedTime === slot.startTime
                        ? 'bg-beige-500 text-white shadow-lg transform scale-105'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-beige-300 hover:bg-beige-50'
                      }
                    `}
                  >
                    {slot.startTime}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Horarios de la tarde */}
          {afternoonSlots.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                Tarde
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {afternoonSlots.map((slot) => (
                  <button
                    key={slot.startTime}
                    onClick={() => onTimeSelect(slot.startTime)}
                    className={`
                      py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200
                      ${selectedTime === slot.startTime
                        ? 'bg-beige-500 text-white shadow-lg transform scale-105'
                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-beige-300 hover:bg-beige-50'
                      }
                    `}
                  >
                    {slot.startTime}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Información adicional */}
      <div className="max-w-md mx-auto bg-beige-50 rounded-xl p-4 text-center">
        <p className="text-sm text-beige-800">
          <Clock className="w-4 h-4 inline mr-1" />
          Duración aproximada: {serviceDuration} minutos
        </p>
      </div>
    </div>
  );
};