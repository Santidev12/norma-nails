import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { Header } from './components/Header';
import { StepIndicator } from './components/StepIndicator';
import { ServiceSelector } from './components/ServiceSelector';
import { DatePicker } from './components/DatePicker';
import { TimeSlotPicker } from './components/TimeSlotPicker';
import { BookingForm } from './components/BookingForm';
import { BookingConfirmation } from './components/BookingConfirmation';
import { BackButton } from './components/BackButton';
import { useBooking } from './hooks/useBooking';

function BookingFlow() {
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
    <div className="min-h-screen bg-gradient-to-br from-beige-100 via-white to-beige-200 font-generalSansSemiboldItalic">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Indicador de pasos */}
        {state.step !== 'confirmation' && (
          <StepIndicator currentStep={state.step} />
        )}

        {/* Botón de atrás */}
        {showBackButton && (
          <div className="max-w-6xl mx-auto mb-6">
            <BackButton onClick={goBack} disabled={state.isLoading} />
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
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 GlamNails Studio. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Hecho con 💅 para nuestras clientas
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-comforta">
      <Routes>
        {/* Ruta para la Landing Page */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <LandingPage onBookNow={() => navigate('/booking')} />
            </>
          }
        />

        {/* Ruta para el flujo de reserva */}
        <Route path="/booking" element={<BookingFlow />} />
      </Routes>
    </div>
  );
}

export default function RootApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}