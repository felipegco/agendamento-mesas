/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        rio: {
          DEFAULT: '#2C5654',
          dark: '#1E3E3C',
          light: '#4C7A78',
        },
        areia: {
          DEFAULT: '#F1E9D8',
          dark: '#E4D8BE',
        },
        tinta: '#20291F',
        livre: {
          DEFAULT: '#3F7A4E',
          bg: '#E4F0E3',
        },
        reservado: {
          DEFAULT: '#B4472F',
          bg: '#F6E2DC',
        },
        madeira: '#C79A4B',
      },
      fontFamily: {
        titulo: ['var(--font-titulo)', 'ui-serif', 'Georgia', 'serif'],
        corpo: ['var(--font-corpo)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['1.0625rem', '1.6'],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      fontWeight: {
        700: '700',
        800: '800',
      },
    },
  },
  plugins: [],
};
