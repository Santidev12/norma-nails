import React from 'react';
import { Service } from '../types';
import { NAIL_SERVICES } from '../data/services';
import { Clock, Star } from 'lucide-react';

interface ServiceSelectorProps {
  onServiceSelect: (service: Service) => void;
  selectedService: Service | null;
}

export const ServiceSelector: React.FC<ServiceSelectorProps> = ({
  onServiceSelect,
  selectedService
}) => {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Nuestros Servicios
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selecciona el servicio que deseas reservar. Cada tratamiento está diseñado 
          para brindarte la mejor experiencia de cuidado y belleza.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {NAIL_SERVICES.map((service) => (
          <div
            key={service.id}
            className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              selectedService?.id === service.id
                ? 'ring-4 ring-pink-300 ring-opacity-60'
                : ''
            }`}
            onClick={() => onServiceSelect(service)}
          >
            {/* Header con imagen */}
            <div className="h-48 bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center">
              <div className="text-6xl opacity-20">
                {service.id === 'manicure' && '💅'}
                {service.id === 'pedicure' && '🦶'}
                {service.id === 'mani-pedi' && '✨'}
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">
                  {service.name}
                </h3>
                <div className="flex items-center text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{service.duration} min</span>
                </div>
                <span className="text-lg font-bold text-pink-600">
                  {service.price}
                </span>
              </div>

              {selectedService?.id === service.id && (
                <div className="mt-4 bg-pink-50 rounded-lg p-3 border border-pink-200">
                  <p className="text-pink-700 text-sm font-medium text-center">
                    ✓ Servicio seleccionado
                  </p>
                </div>
              )}
            </div>

            {/* Botón de selección */}
            <div className="absolute top-4 right-4">
              <div className={`w-6 h-6 rounded-full border-2 ${
                selectedService?.id === service.id
                  ? 'bg-pink-500 border-pink-500'
                  : 'border-gray-300 bg-white'
              } flex items-center justify-center`}>
                {selectedService?.id === service.id && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};