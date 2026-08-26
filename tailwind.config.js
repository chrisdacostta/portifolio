/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#DEDBC8',
          warm: '#E1E0CC',
        },
        cream: {
          DEFAULT: '#F9F8F3',
          dark: '#E8E6DC',
        },
        charcoal: {
          DEFAULT: '#101010',
          light: '#1A1917',
          card: '#212121',
        },
        accent: {
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        signal: '#84cc16',
      },
      fontFamily: {
        sans: ['Almarai', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
    },
  },
  plugins: [],
}
