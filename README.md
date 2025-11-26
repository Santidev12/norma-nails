# 🌸 Norma Nails Studio - Sistema de Gestión de Citas

Sistema completo de reservas para salón de uñas con integración a Google Calendar, desarrollado en React con TypeScript y Tailwind CSS.

## 🎯 Características Principales

- **Gestión Completa de Reservas**: Sistema intuitivo paso a paso
- **Integración Google Calendar**: Sincronización en tiempo real de disponibilidad
- **Responsive Design**: Optimizado para móviles, tablets y desktop
- **Sin Base de Datos**: Persistencia completa a través de Google Calendar
- **Recordatorios Automáticos**: Emails de confirmación y recordatorios
- **Validación Avanzada**: Formularios con validación en tiempo real

## 🛠️ Stack Tecnológico

- **Framework**: React 18 con TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **APIs**: Google Calendar API, EmailJS
- **Icons**: Lucide React

### ¿Por qué React en lugar de Next.js?

He elegido **React.js** para este proyecto por las siguientes razones:

1. **Simplicidad**: No necesitamos SSR o SSG para un sistema de reservas
2. **Interactividad**: La aplicación es principalmente interactiva del lado cliente
3. **APIs Externas**: La integración con Google Calendar se maneja completamente en el frontend
4. **Despliegue Simple**: Puede desplegarse como SPA en cualquier servidor estático
5. **Menor Complejidad**: Para este caso de uso específico, React puro es más eficiente

## 📋 Servicios Disponibles

| Servicio | Duración | Descripción |
|----------|----------|-------------|
| Manicura | 60 min | Cuidado completo de uñas de manos |
| Pedicura | 60 min | Tratamiento completo para pies |
| Manicura + Pedicura | 90 min | Paquete completo de cuidado |

## 🚀 Instalación y Configuración

### 1. Clonar el Repositorio
```bash
git clone [repository-url]
cd nails
```

### 2. Instalar Dependencias
```bash
npm install
```

### 3. Configurar Variables de Entorno

Copia el archivo `.env.example` a `.env` y configura las siguientes variables:

```env
# Google Calendar API
VITE_GOOGLE_API_KEY=tu_google_api_key
VITE_GOOGLE_CLIENT_ID=tu_google_client_id
VITE_GOOGLE_CALENDAR_ID=tu_calendar_id

# EmailJS para envío de emails
VITE_EMAILJS_API_KEY=tu_emailjs_api_key
VITE_EMAILJS_SERVICE_ID=tu_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_emailjs_template_id
```

### 4. Configuración de Google Calendar API

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. Habilita la Google Calendar API
4. Crea credenciales (API Key y OAuth 2.0 Client ID)
5. Configura los dominios autorizados
6. Crea un calendario dedicado para las citas

### 5. Configuración de EmailJS

1. Regístrate en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email (Gmail, Outlook, etc.)
3. Crea una plantilla de email para confirmaciones
4. Obtén tu API Key, Service ID y Template ID

### 6. Ejecutar en Desarrollo
```bash
npm run dev
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ServiceSelector.tsx
│   ├── DatePicker.tsx
│   ├── TimeSlotPicker.tsx
│   ├── BookingForm.tsx
│   ├── BookingConfirmation.tsx
│   ├── Header.tsx
│   ├── StepIndicator.tsx
│   └── BackButton.tsx
├── hooks/               # Custom Hooks
│   ├── useBooking.ts
│   └── useCalendar.ts
├── services/            # Servicios API
│   ├── googleCalendar.ts
│   └── emailService.ts
├── types/               # Tipos TypeScript
│   └── index.ts
├── data/                # Datos estáticos
│   └── services.ts
└── App.tsx             # Componente principal
```

## 🎨 Diseño y UX

### Paleta de Colores
- **Primario**: Rosa (#EC4899) a Rose (#F43F5E)
- **Secundario**: Beige suave (#F5F1EB)
- **Acentos**: Verde para confirmaciones, Azul para información
- **Neutros**: Grises para texto y bordes

### Características de Diseño
- **Animaciones Sutiles**: Hover states y transiciones suaves
- **Micro-interacciones**: Feedback visual en todas las acciones
- **Responsive Design**: Breakpoints optimizados para todos los dispositivos
- **Accesibilidad**: Contraste adecuado y navegación por teclado

## 🔧 Funcionalidades Técnicas

### Sistema de Reservas
1. **Selección de Servicio**: Cards interactivas con información detallada
2. **Calendario Inteligente**: Deshabilita domingos y fechas pasadas
3. **Horarios Dinámicos**: Consulta en tiempo real a Google Calendar
4. **Validación de Formularios**: Validación en tiempo real con mensajes claros
5. **Confirmación Visual**: Estados de carga y confirmación exitosa

### Integración Google Calendar
- **Consulta de Disponibilidad**: API calls para obtener eventos existentes
- **Creación de Eventos**: Eventos automáticos con detalles completos
- **Recordatorios**: Configuración automática de recordatorios
- **Attendees**: Invitación automática al cliente

### Sistema de Emails
- **Confirmación Inmediata**: Email de confirmación al completar reserva
- **Recordatorios**: Email 24 horas antes de la cita
- **Plantillas Personalizadas**: Templates diseñados específicamente

## 🔒 Seguridad y Privacidad

- **OAuth 2.0**: Autenticación segura con Google
- **API Keys**: Configuración segura de variables de entorno
- **Validación Cliente**: Validación exhaustiva de datos
- **Error Handling**: Manejo robusto de errores de API

## 📱 Responsive Design

### Breakpoints
- **Móvil**: < 768px - Diseño vertical optimizado
- **Tablet**: 768px - 1024px - Layout adaptado
- **Desktop**: > 1024px - Experiencia completa

### Optimizaciones Móviles
- Touch-friendly buttons (44px minimum)
- Calendario optimizado para touch
- Formularios con teclados específicos
- Carga rápida con lazy loading

## 🚀 Despliegue

### Desarrollo
```bash
npm run dev
```

### Producción
```bash
npm run build
npm run preview
```

### Plataformas Recomendadas
- **Netlify**: Deploy automático desde Git
- **Vercel**: Optimizado para React
- **Firebase Hosting**: Integración natural con Google APIs

## 🧪 Testing y Calidad

### Casos de Prueba Principales
1. **Flujo Completo**: Reserva de principio a fin
2. **Validaciones**: Errores de formulario y API
3. **Responsive**: Pruebas en diferentes dispositivos
4. **Accesibilidad**: Navegación por teclado y screen readers

### Performance
- **Lazy Loading**: Componentes y scripts cargados según necesidad
- **Optimización de Imágenes**: Imágenes optimizadas para web
- **Bundle Size**: Análisis y optimización del tamaño final

## 🤝 Contribución

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

Desarrollado con 💅 por el equipo de Nails Studio by Norma