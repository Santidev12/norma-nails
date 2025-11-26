import { Service } from '../types';

export const NAIL_SERVICES: Service[] = [
  {
    id: 'manicure',
    name: 'Manicura',
    duration: 60,
    description: 'Cuidado completo de uñas de manos con limado, cutícula y esmaltado profesional.',
    price: 'Desde €15'
  },
  {
    id: 'pedicure',
    name: 'Pedicura',
    duration: 60,
    description: 'Tratamiento completo para pies incluyendo exfoliación, masaje y esmaltado.',
    price: 'Desde €20'
  },
  {
    id: 'mani-pedi',
    name: 'Manicura y Pedicura',
    duration: 90,
    description: 'Paquete completo que incluye manicura y pedicura para un cuidado integral.',
    price: 'Desde €30'
  }
];