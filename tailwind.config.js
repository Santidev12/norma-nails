/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          '50': '#F5F3EF',
          '100': '#E4DCD2',
          '200': '#d6caba',
          '300': '#C2B099',
        },
        perl: {
          DEFAULT: '#FAF8F5',
        }
      },
      fontFamily: {
        comforta: ['Comfortaa Variable', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};
