// Servicio para envío de emails de recordatorio
export class EmailService {
  private apiKey = import.meta.env.VITE_EMAILJS_API_KEY;
  private serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  private templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  async initialize() {
    // Cargar EmailJS
    if (!(window as any).emailjs) {
      await new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = resolve;
        document.head.appendChild(script);
      });
    }

    (window as any).emailjs.init(this.apiKey);
  }

  async sendBookingConfirmation(bookingData: any) {
    await this.initialize();

    const templateParams = {
      to_name: bookingData.clientData.name,
      to_email: bookingData.clientData.email,
      service_name: bookingData.selectedService.name,
      appointment_date: bookingData.selectedDate.toLocaleDateString('es-MX', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      appointment_time: bookingData.selectedTime,
      duration: bookingData.selectedService.duration,
      salon_name: 'Norma Nails Studio'
    };

    try {
      await (window as any).emailjs.send(
        this.serviceId,
        this.templateId,
        templateParams
      );
    } catch (error) {
      console.error('Error sending confirmation email:', error);
      // No lanzamos error para no bloquear la reserva
    }
  }

  async scheduleReminder(bookingData: any) {
    // En un entorno real, esto se manejaría con un servicio backend
    // que programe el envío del recordatorio 24 horas antes
    console.log('Recordatorio programado para:', bookingData);
  }
}