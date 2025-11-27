/**
 * Servicio para crear reservas enviando los datos a un webhook (Make/Integromat).
 * Este método NO requiere autenticación del usuario final y permite que cualquier persona agende.
 */
export class GoogleCalendarService {
  /**
   * Envía los datos de la reserva al webhook de Make.
   * @param bookingData Datos de la reserva (fecha, hora, cliente, servicio)
   */
  async createBooking(bookingData: any) {
    try {
      // Crear objeto Date combinando fecha y hora
      const [hours, minutes] = bookingData.selectedTime.split(':');
      const startDateTime = new Date(bookingData.selectedDate);
      startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

      const payload = {
        startDate: startDateTime.toISOString(),
        name: bookingData.clientData.name,
        email: bookingData.clientData.email,
        service: bookingData.selectedService.name,
        duration: bookingData.selectedService.duration
      };

      console.log('Enviando datos a Make:', payload);

      const response = await fetch('https://hook.integromat.com/TU_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error en el webhook: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Respuesta de Make:', result);
      return result;

    } catch (error) {
      console.error('Error enviando datos a Make:', error);
      throw new Error('No se pudo crear la cita vía Make');
    }
  }
}
