import React from 'react';
import { Sparkles, Star, Users, Award, Calendar, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface LandingPageProps {
  onBookNow: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onBookNow }) => {
  return (
    <div className="min-h-screen bg-perl ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-10">
        {/* Background Pattern */}

        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center bg-beige-200 text-white px-4 py-2 rounded-full text-sm font-sans font-light">
                <Sparkles className="w-4 h-4 mr-2" />
                Disfruta de un 20% de descuento en tu primera cita
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Haz que tus Uñas
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-beige-200 to-beige-100">
                    Luzcan Hermosas
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Transforma tus uñas en obras de arte con nuestros servicios expertos y experiencia personalizada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onBookNow}
                  className="bg-beige-200 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
                >
                  Reservar Cita
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-beige-200 hover:bg-beige-50 transition-all duration-200">
                  Conoce Más
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-perl to-beige-100 rounded-3xl p-8 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              En GlamNails, entendemos que cuando se trata de arte en uñas, tienes muchas opciones para elegir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-beige-200" />,
                title: "Años de Experiencia",
                description: "Más de 5 años creando diseños únicos y cuidando la salud de tus uñas."
              },
              {
                icon: <Users className="w-8 h-8 text-beige-200" />,
                title: "Personal Experimentado",
                description: "Nuestro equipo está certificado y constantemente actualizado en las últimas tendencias."
              },
              {
                icon: <Sparkles className="w-8 h-8 text-beige-200" />,
                title: "Mejor Calidad",
                description: "Utilizamos solo productos premium y técnicas profesionales para resultados duraderos."
              },
              {
                icon: <Star className="w-8 h-8 text-beige-200" />,
                title: "Tendencias Actuales",
                description: "Siempre al día con las últimas tendencias en nail art y técnicas innovadoras."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-r group-hover:from-beige-100 group-hover:to-beige-50 transition-all duration-300 hover:shadow-lg trasition-shadow">
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
      <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
            <div className="flex justify-center mb-8">
              <button className="bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium">
                VER MÁS SERVICIOS
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/nails_1.jpg",
                title: "Pedicura",
                description: "Tratamiento completo para pies con exfoliación y masaje relajante."
              },
              {
                image: "/images/nails_2.jpg",
                title: "Nail Art",
                description: "Diseños únicos y personalizados para expresar tu estilo personal."
              },
              {
                image: "/images/nails_3.jpg",
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

      {/* Creativity Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  Liberando Creatividad:
                  <span className="block">Un Refugio de Arte en Uñas</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Entra en nuestro espacio vibrante e inspirador, diseñado para tu imaginación 
                  y despertar tu lado artístico. Siente la energía y pasión que 
                  irradia de nuestros hábiles artistas de uñas, quienes se dedican a convertir 
                  tus sueños de uñas en realidad.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/nails_1.jpg"
                  alt="Nail art design"
                  className="w-full h-48 object-cover rounded-2xl"
                />
                <img
                  src="/images/nails_1.jpg"
                  alt="Manicure process"
                  className="w-full h-32 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/nails_1.jpg"
                  alt="Nail care"
                  className="w-full h-32 object-cover rounded-2xl"
                />
                <img
                  src="/images/nails_1.jpg"
                  alt="Professional tools"
                  className="w-full h-48 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Portafolio de Diseños Impresionantes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/images/nails_1.jpg",
                title: "Diseño de Arte en Uñas",
                category: "Nail Art"
              },
              {
                image: "/images/nails_1.jpg",
                title: "Arte en Esmalte de Uñas",
                category: "Polish Art"
              },
              {
                image: "/images/nails_1.jpg",
                title: "Manicura Clásica",
                category: "Classic"
              },
              {
                image: "/images/nails_1.jpg",
                title: "Diseño Moderno",
                category: "Modern"
              },
              {
                image: "/images/nails_1.jpg",
                title: "Arte Creativo",
                category: "Creative"
              },
              {
                image: "/images/nails_1.jpg",
                title: "Estilo Elegante",
                category: "Elegant"
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.category}</p>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/nails_1.jpg"
                alt="Special nail art design"
                className="w-full h-96 object-cover rounded-3xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-beige-300 to-beige-100 text-white p-6 rounded-2xl shadow-xl">
                <p className="text-sm font-medium">50% OFF</p>
                <p className="text-2xl font-bold">Color Único</p>
                <p className="text-sm">de Esmalte de Uñas</p>
                <button className="mt-3 bg-white text-beige-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                  RESERVAR AHORA
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <img
                  src="/images/nails_1.jpg"
                  alt="New nail art design"
                  className="w-full h-64 object-cover rounded-3xl"
                />
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-beige-100 to-beige-300 text-white p-4 rounded-2xl shadow-xl">
                  <p className="text-xl font-bold">Nuevo Diseño</p>
                  <p className="text-sm">de Arte en Uñas</p>
                  <button className="mt-2 bg-white text-beige-200 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    RESERVAR AHORA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-beige-200 to-beige-300">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              ¿Lista para Transformar tus Uñas?
            </h2>
            <p className="text-xl text-beige-50">
              Reserva tu cita hoy y descubre por qué somos el salón de uñas favorito de la ciudad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onBookNow}
                className="bg-white text-beige-200 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Reservar Cita Ahora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-beige-200 transition-all duration-200">
                Ver Galería
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-perl text-beige-300">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-beige-200 to-beige-50 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">GlamNails</h3>
                  <p className="text-sm text-gray-400">Studio</p>
                </div>
              </div>
              <p className="text-beige-200 leading-relaxed">
                Tu destino para el cuidado profesional de uñas y arte personalizado. 
                Creamos experiencias únicas que reflejan tu estilo personal.
              </p>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Información de Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-beige-300" />
                  <span className="text-beige-200">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-beige-300" />
                  <span className="text-beige-200">info@glamnails.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-beige-300" />
                  <span className="text-beige-200">123 Beauty Street, Ciudad</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-xl font-semibold">Horarios de Atención</h4>
              <div className="space-y-2 text-beige-200">
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
                  <span className="text-red-400">Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};