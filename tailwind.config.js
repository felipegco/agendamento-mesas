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
          DEFAULT: '#264F36',
          dark: '#1A3826',
          light: '#3A704F',
        },
        areia: {
          DEFAULT: '#F8F6F0',
          dark: '#EAE3D2',
        },
        tinta: '#14202B',
        livre: {
          DEFAULT: '#19A354',
          bg: '#E8F6ED',
        },
        reservado: {
          DEFAULT: '#E5856E',
          bg: '#FCECE8',
        },
        madeira: '#EFA62A',
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