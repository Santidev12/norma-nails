import { ArrowLeft } from 'lucide-react';
import { Header } from '../../components/Header';
import { Button } from '../../components/ui/button';
import { BookingConfirmation } from './components/BookingConfirmation';
import { BookingForm } from './components/BookingForm';
import { DatePicker } from './components/DatePicker';
import { ServiceSelector } from './components/ServiceSelector';
import { StepIndicator } from './components/StepIndicator';
import { TimeSlotPicker } from './components/TimeSlotPicker';
import { useBooking } from './hooks/useBooking';

interface BookingProps {
  goHome: () => void;
}

export const Booking: React.FC<BookingProps> = ({ goHome }) => {
    const {
    state,
    selectService,
    selectDate,
    selectTime,
    updateClientData,
    confirmBooking,
    resetBooking,
    goBack,
  } = useBooking();

  const renderCurrentStep = () => {
    switch (state.step) {
      case 'service':
        return (
          <ServiceSelector
            onServiceSelect={selectService}
            selectedService={state.selectedService}
          />
        );

      case 'date':
        return (
          <DatePicker
            selectedDate={state.selectedDate}
            onDateSelect={selectDate}
          />
        );

      case 'time':
        return state.selectedDate && state.selectedService ? (
          <TimeSlotPicker
            selectedDate={state.selectedDate}
            serviceDuration={state.selectedService.duration}
            selectedTime={state.selectedTime}
            onTimeSelect={selectTime}
          />
        ) : null;

      case 'details':
        return state.selectedService && state.selectedDate && state.selectedTime ? (
          <BookingForm
            selectedService={state.selectedService}
            selectedDate={state.selectedDate}
            selectedTime={state.selectedTime}
            clientName={state.clientData.name}
            clientEmail={state.clientData.email}
            onClientDataChange={updateClientData}
            onConfirm={confirmBooking}
            isLoading={state.isLoading}
          />
        ) : null;

      case 'confirmation':
        return state.selectedService && state.selectedDate && state.selectedTime ? (
          <BookingConfirmation
            selectedService={state.selectedService}
            selectedDate={state.selectedDate}
            selectedTime={state.selectedTime}
            clientName={state.clientData.name}
            clientEmail={state.clientData.email}
            onNewBooking={resetBooking}
          />
        ) : null;

      default:
        return null;
    }
  };

  const showBackButton = state.step !== 'service' && state.step !== 'confirmation';

  return (
    <div className="min-h-screen bg-linear-to-br from-beige-200 via-white to-beige-50 font-generalSansSemiboldItalic">
      <Header goHome={goHome} />

      <main className="container mx-auto px-4 py-8">
        {/* Indicador de pasos */}
        {state.step !== 'confirmation' && (
          <StepIndicator currentStep={state.step} />
        )}

        {/* Botón de atrás */}
        {showBackButton && (
          <div className="max-w-6xl mx-auto mb-6">
            <Button variant="ghost" onClick={goBack}>
              <ArrowLeft className="w-4 h-4 mr-2" />
                Atrás
            </Button>
          </div>
        )}

        {/* Error global */}
        {state.error && (
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-red-800 text-center">{state.error}</p>
            </div>
          </div>
        )}

        {/* Contenido principal */}
        <div className="max-w-6xl mx-auto">
          {renderCurrentStep()}
        </div>
      </main>

      {/* Footer */}
        <div className="container mx-auto px-2 sm:px-4 text-center py-5 sm:py-20">
          <p className="text-gray-600 text-xs sm:text-sm">
            © 2025 Nails Studio by Norma. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Hecho con 💅 para nuestras clientas
          </p>
        </div>
    </div>
  );
};