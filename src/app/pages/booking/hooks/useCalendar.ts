import { useEffect, useState } from 'react';
import { TimeSlot } from './types';
import { getAvailableTimeSlots } from '../utils/getAvailableTimeSlots';

export const useCalendar = (date: Date, duration: number) => {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSlots = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const slots = await getAvailableTimeSlots(date, duration);
        setTimeSlots(slots);
      } catch (err: any) {
        setError('No se pudieron cargar los horarios disponibles.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadSlots();
  }, [date, duration]);

  return { timeSlots, isLoading, error };
};
