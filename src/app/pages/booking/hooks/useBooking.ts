import { useState, useCallback } from 'react';
import { BookingState, Service } from './types';
import { EmailService } from '../../../services/emailService';

const initialState: BookingState = {
  step: 'service',
  selectedService: null,
  selectedDate: null,
  selectedTime: null,
  clientData: {
    name: '',
    email: ''
  },
  isLoading: false,
  error: null
};


export const useBooking = () => {
  const url = import.meta.env.VITE_MAKE_WEBHOOK_URL || '';
  const [state, setState] = useState<BookingState>(initialState);

  const [emailService] = useState(() => new EmailService());

  const updateState = useCallback((updates: Partial<BookingState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const selectService = useCallback((service: Service) => {
    updateState({
      selectedService: service,
      step: 'date',
      error: null
    });
  }, [updateState]);

  const selectDate = useCallback((date: Date) => {
    updateState({
      selectedDate: date,
      step: 'time',
      selectedTime: null,
      error: null
    });
  }, [updateState]);

  const selectTime = useCallback((time: string) => {
    updateState({
      selectedTime: time,
      step: 'details',
      error: null
    });
  }, [updateState]);

  const updateClientData = useCallback((name: string, email: string) => {
    updateState({
      clientData: { name, email },
      error: null
    });
  }, [updateState]);


  const confirmBooking = useCallback(async () => {
    const { selectedService, selectedDate, selectedTime, clientData } = state;
    console.log(state);

    if (!selectedService || !selectedDate || !selectedTime || !clientData.name || !clientData.email) {
      updateState({ error: 'Faltan datos requeridos para completar la reserva' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(clientData.email)) {
      updateState({ error: 'Por favor ingresa un email válido' });
      return;
    }

    updateState({ isLoading: true, error: null });

    try {
      const [hours, minutes] = selectedTime.split(':');
      const startDate = new Date(selectedDate);
      startDate.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      const payload = {
        startDate: startDate.toISOString(),
        name: clientData.name,
        duration: selectedService.duration
      };

      console.log('Enviando reserva a Make:', payload);

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.statusText}`);
      }

      try {
        await emailService.sendBookingConfirmation({ selectedService, selectedDate, selectedTime, clientData });
        await emailService.scheduleReminder({ selectedService, selectedDate, selectedTime, clientData });
      } catch (emailError) {
        console.warn('Error enviando email, pero la reserva fue enviada a Make:', emailError);
      }

      updateState({
        step: 'confirmation',
        isLoading: false
      });

    } catch (error: any) {
      console.error('Error en confirmBooking:', error);
      updateState({
        error: error.message || 'No se pudo completar la reserva',
        isLoading: false
      });
    }
  }, [state, emailService, updateState]);

  const resetBooking = useCallback(() => {
    setState(initialState);
  }, []);

  const goBack = useCallback(() => {
    const stepFlow = ['service', 'date', 'time', 'details', 'confirmation'];
    const currentIndex = stepFlow.indexOf(state.step);
    if (currentIndex > 0) {
      const previousStep = stepFlow[currentIndex - 1] as BookingState['step'];
      updateState({ step: previousStep });
    }
  }, [state.step, updateState]);

  return {
    state,
    selectService,
    selectDate,
    selectTime,
    updateClientData,
    confirmBooking,
    resetBooking,
    goBack,
  };
};
