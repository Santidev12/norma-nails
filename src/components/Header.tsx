import React from 'react';
import { Sparkles, Phone, Mail } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-xs shadow-xs border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-linear-to-r from-beige-700 to-beige-50 rounded-full flex items-center justify-center">
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
              <a href="#inicio" className="text-gray-600 hover:text-beige-500 transition-colors">Inicio</a>
              <a href="#servicios" className="text-gray-600 hover:text-beige-500 transition-colors">Servicios</a>
              <a href="#galeria" className="text-gray-600 hover:text-beige-500 transition-colors">Galería</a>
              <a href="#contacto" className="text-gray-600 hover:text-beige-500 transition-colors">Contacto</a>
            </nav>
            <div className="flex items-center text-gray-600">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">nailsbynorma.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};