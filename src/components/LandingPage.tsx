import React from 'react';
import { Sparkles, Star, Users, Award, Phone, MapPin } from 'lucide-react';
import { PulsatingButton } from './ui/pulsating-button';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

interface LandingPageProps {
  onBookNow: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onBookNow }) => {
  const images = [
    "/images/nails1.jpg",
    "/images/nails2.jpg",
    "/images/nails3.jpg",
    "/images/nails4.jpg",
    "/images/nails5.jpg",
    "/images/nails6.jpg",
  ];
  return (
    // blur en la parte de abajo de este div
    <div className="min-h-screen bg-linear-to-br from-beige-50 to-beige-100" id='inicio'>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-10">
        {/* Background Pattern */}

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-beige-300 text-white px-4 py-2 rounded-full text-sm font-sans font-light">
                <Sparkles className="w-4 h-4 mr-2" />
                Disfruta de un 20% de descuento en tu primera cita
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Haz que tus Uñas
                  <span className="block text-transparent bg-clip-text bg-linear-to-r from-beige-400 to-beige-100">
                    Luzcan Hermosas
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transforma tus uñas en obras de arte con nuestros servicios expertos y experiencia personalizada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row">
                <PulsatingButton onClick={onBookNow} pulseColor='#8c7b6a' className="bg-beige-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                  Reservar Cita
                </PulsatingButton>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative bg-linear-to-br from-perl to-beige-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="/images/nails4.jpg"
                  alt="Manicura profesional"
                  className="w-full h-96 object-cover rounded-2xl"
                />

                {/* Floating Cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold text-gray-800">+2</span>
                  </div>
                  <p className="text-sm text-gray-600">Años de Experiencia</p>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-beige-200" />
                    <span className="font-bold text-gray-800">500+</span>
                  </div>
                  <p className="text-sm text-gray-600">Clientas Satisfechas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white xl:px-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              En Nails Studio by Norma, entendemos que cuando se trata de arte en uñas, tienes muchas opciones para elegir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-beige-800" />,
                title: "Años de Experiencia",
                description: "Más de 5 años creando diseños únicos y cuidando la salud de tus uñas."
              },
              {
                icon: <Users className="w-8 h-8 text-beige-800" />,
                title: "Personal Experimentado",
                description: "Nuestro equipo está certificado y constantemente actualizado en las últimas tendencias."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-beige-800" />,
                title: "Mejor Calidad",
                description: "Utilizamos solo productos premium y técnicas profesionales para resultados duraderos."
              },
              {
                icon: <Star className="w-8 h-8 text-beige-800" />,
                title: "Tendencias Actuales",
                description: "Siempre al día con las últimas tendencias en nail art y técnicas innovadoras."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-linear-to-r group-hover:from-beige-500 group-hover:to-beige-100 transition-all duration-200 shadow-sm hover:shadow-lg hover:shadow-beige-500 trasition-shadow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="py-20 bg-linear-to-br from-beige-50 to-beige-100" id='servicios'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/nails1.jpg",
                title: "Pedicura",
                description: "Tratamiento completo para pies con exfoliación y masaje relajante."
              },
              {
                image: "/images/nails2.jpg",
                title: "Nail Art",
                description: "Diseños únicos y personalizados para expresar tu estilo personal."
              },
              {
                image: "/images/nails3.jpg",
                title: "Manicura",
                description: "Cuidado completo de uñas con técnicas profesionales y productos premium."
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-white rounded border flex items-center justify-center">
                        <span className="text-xs text-gray-800">{index + 1}</span>
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white" id="galeria">
        <div className="w-full max-w-5xl mx-auto backdrop-blur-xl ">
          <Carousel className="w-full backdrop-blur-xl px-4 sm:px-0">
            <CarouselContent>
              {images.map((img, index) => (
                <CarouselItem key={index} className="basis-[90%] md:basis-1/2 lg:basis-1/3">
                  <div className="py-20 backdrop-blur-xl">
                    <img
                      src={img}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-64 object-cover rounded-2xl shadow-lg"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 bg-perl text-beige-900" id='contacto'>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-linear-to-r from-beige-700 to-beige-50 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Nails by Norma</h3>
                  <p className="text-sm text-beige-600">Studio</p>
                </div>
              </div>
              <p className="text-beige-600 leading-relaxed">
                Tu destino para el cuidado profesional de uñas y arte personalizado.
                Creamos experiencias únicas que reflejan tu estilo personal.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Información de Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-beige-600" />
                  <span className="text-beige-600">(+34) 614 15 96 36</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-beige-600" />
                  <span className="text-beige-600">Madrid, España</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Horarios de Atención</h4>
              <div className="space-y-2 text-beige-600">
                <div className="flex justify-between">
                  <span>Lunes - Viernes</span>
                  <span>9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-beige-600 font-extrabold">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};