import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/home/Home';
import { Booking } from './pages/booking/Booking';

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
              <Header goHome={() => navigate('/')} />
              <Home onBookNow={() => navigate('/booking')} />
            </>
          }
        />

        {/* Ruta para el flujo de reserva */}
        <Route path="/booking" element={<Booking goHome={() => navigate('/')} />} />
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