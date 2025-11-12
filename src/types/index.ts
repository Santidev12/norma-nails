// Tipos principales para el sistema de reservas
export interface Service {
  id: string;
  name: string;
  duration: number; // en minutos
  description: string;
  price?: string; // opcional para mostrar
}

export interface TimeSlot {
  startTime: string;
  endTime: string;
  available: boolean;
}

export interface BookingData {
  clientName: string;
  clientEmail: string;
  selectedDate: Date;
  selectedTime: string;
  selectedService: Service;
}

export interface CalendarEvent {
  id?: string;
  summary: string;
  description: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
}

export interface BookingState {
  step: 'service' | 'date' | 'time' | 'details' | 'confirmation';
  selectedService: Service | null;
  selectedDate: Date | null;
  selectedTime: string | null;
  clientData: {
    name: string;
    email: string;
  };
  isLoading: boolean;
  error: string | null;
}