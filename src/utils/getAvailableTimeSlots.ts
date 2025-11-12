export const getAvailableTimeSlots = async (date: Date, duration: number) => {
  try {
    const response = await fetch('https://hook.eu2.make.com/wtvhr5ld972trjrlgdty54d71iqhxdtc');

    if (!response.ok) {
      throw new Error(`Error al consultar citas: ${response.statusText}`);
    }

    const bookedAppointments: { date: string; duration: number }[] = await response.json();

    const sameDayAppointments = bookedAppointments
      .map(a => ({
        start: new Date(a.date),
        end: new Date(new Date(a.date).getTime() + a.duration * 60000)
      }))
      .filter(a =>
        a.start.toDateString() === date.toDateString()
      );

    const startOfDay = new Date(date);
    startOfDay.setHours(9, 0, 0, 0);

    const endOfDay = new Date(date);
    endOfDay.setHours(18, 0, 0, 0);

    const timeSlots = [];
    const currentTime = new Date(startOfDay);

    while (currentTime.getTime() + duration * 60000 <= endOfDay.getTime()) {
      const slotStart = new Date(currentTime);
      const slotEnd = new Date(currentTime.getTime() + duration * 60000);

      const isOverlapping = sameDayAppointments.some(appt => {
        return slotStart < appt.end && slotEnd > appt.start;
      });

      timeSlots.push({
        startTime: slotStart.toTimeString().slice(0, 5),
        endTime: slotEnd.toTimeString().slice(0, 5),
        available: !isOverlapping,
        datetime: slotStart
      });

      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }

    return timeSlots;
  } catch (error) {
    console.error(error);
    throw error;
  }
};