import React from 'react';
import { Calendar } from '../components/ui/calendar';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateSelect,
}) => {
  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selected = new Date(date);
    selected.setHours(0, 0, 0, 0);

    if (selected < today) return; // No hacer nada si la fecha es anterior a hoy

    onDateSelect(date);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-beige-900 mb-4">
          Selecciona una Fecha
        </h2>
        <p className="text-beige-800">
          Elige el día que mejor te convenga para tu cita
        </p>
      </div>

      <div className='flex justify-center text-center items-center w-[95%] sm:w-[30%] mx-auto'>
        <Calendar
          mode="single"
          required={false}
          selected={selectedDate ?? undefined}
          onSelect={handleSelect}
          startMonth={new Date()}
          className="rounded-2xl border p-4 w-full border-beige-300 shadow-xl"
          buttonVariant="ghost"
        />
      </div>
    </div>
  );
};