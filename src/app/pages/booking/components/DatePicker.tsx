import React from 'react';
import { DayPicker } from "react-day-picker";
import { es } from "react-day-picker/locale";
import "react-day-picker/style.css";

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

      <div className="flex justify-center items-center w-full">
        <DayPicker
          mode="single"
          disabled={{ before: new Date() }}
          locale={es}
          navLayout='around'
          required
          selected={selectedDate ?? undefined}
          onSelect={handleSelect}
          startMonth={new Date()}
          animate
          classNames={{
           today: "bg-beige-50 text-beige-900 font-semibold rounded-xl border-none",
           day: "text-beige-900 font-medium hover:bg-beige-100 rounded-xl",
           chevron: "bg-beige-50 rounded-full hover:bg-beige-100",
           selected: "bg-beige-200 text-beige-900 font-semibold rounded-xl",
          }}
        />
      </div>
    </div>
  );
};