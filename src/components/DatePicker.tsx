import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateSelect,
  minDate = new Date()
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const current = new Date(startDate);

    for (let i = 0; i < 42; i++) {
      days.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return days;
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    
    // Deshabilitar domingos (día 0) y fechas pasadas
    return checkDate < today || date.getDay() === 0;
  };

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newMonth = new Date(currentMonth);
    if (direction === 'prev') {
      newMonth.setMonth(newMonth.getMonth() - 1);
    } else {
      newMonth.setMonth(newMonth.getMonth() + 1);
    }
    setCurrentMonth(newMonth);
  };

  const days = getDaysInMonth(currentMonth);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Selecciona una Fecha
        </h2>
        <p className="text-gray-600">
          Elige el día que mejor te convenga para tu cita
        </p>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header del calendario */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <h3 className="text-lg font-semibold">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
            </div>

            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Días de la semana */}
        <div className="grid grid-cols-7 bg-gray-50">
          {dayNames.map(day => (
            <div key={day} className="p-3 text-center text-sm font-medium text-gray-600">
              {day}
            </div>
          ))}
        </div>

        {/* Días del mes */}
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            const disabled = isDateDisabled(day);
            const selected = isDateSelected(day);
            const currentMonthDay = isCurrentMonth(day);

            return (
              <button
                key={index}
                onClick={() => !disabled && onDateSelect(day)}
                disabled={disabled}
                className={`
                  relative p-3 text-sm transition-all duration-200
                  ${!currentMonthDay ? 'text-gray-300' : ''}
                  ${disabled 
                    ? 'text-gray-300 cursor-not-allowed' 
                    : 'hover:bg-pink-50 cursor-pointer'
                  }
                  ${selected 
                    ? 'bg-pink-500 text-white font-bold' 
                    : currentMonthDay ? 'text-gray-700' : ''
                  }
                `}
              >
                {day.getDate()}
                {selected && (
                  <div className="absolute inset-0 rounded-full bg-pink-500 -z-10"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Nota sobre días no disponibles */}
        <div className="p-4 bg-gray-50 text-center">
          <p className="text-xs text-gray-500">
            Los domingos permanecemos cerrados
          </p>
        </div>
      </div>
    </div>
  );
};