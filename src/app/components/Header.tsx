import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sparkles, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  goHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ goHome }) => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isBooking = location.pathname === '/booking';

  return (
    <header className="bg-white/95 backdrop-blur-xs shadow-xs border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-r from-beige-800 to-beige-50 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-beige-900">Nails Studio by Norma</h1>
              <p className="text-xs text-beige-600">Studio</p>
            </div>
          </div>

          {/* Información de contacto */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              {!isHome && (
                <button
                  onClick={goHome}
                  className="text-beige-900 hover:text-beige-500 transition-colors"
                >
                  Inicio
                </button>
              )}
              {!isBooking && (
                <>
                  <a href="#servicios" className="text-beige-900 hover:text-beige-500 transition-colors">
                    Servicios
                  </a>
                  <a href="#galeria" className="text-beige-900 hover:text-beige-500 transition-colors">
                    Galería
                  </a>
                  <a href="#contacto" className="text-beige-900 hover:text-beige-500 transition-colors">
                    Contacto
                  </a>
                </>
              )}
            </nav>

            {/* Contact info (siempre visible) */}
            <div className="flex items-center text-beige-900">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(+34) 614 15 96 36</span>
            </div>
            <div className="flex items-center text-beige-900">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">nailsbynorma.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
