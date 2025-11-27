import React from 'react';
import { Calendar } from '../../../components/ui/calendar';

interface DatePickerProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  selectedDate,
  onDateSelect,
}) => {
 const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    onDateSelect(date);
  };

  const isDisabled = (date: Date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d < today;
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
          required
          disabled={isDisabled}
          selected={selectedDate ?? undefined}
          onSelect={handleSelect}
          startMonth={new Date()}
          className="rounded-2xl border p-4 w-full border-beige-300 shadow-xl"
          buttonVariant="ghost"
          classNames={{
            day_button: 'transition-all rounded-md hover:border hover:border-beige-500'
          }}
        />
      </div>
    </div>
  );
};