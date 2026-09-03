/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FAF8F5', 100: '#F5F0EB', 200: '#EAE0D5' },
        gold: { 300: '#E6CA65', 400: '#D4AF37', 500: '#AA7C11' },
        charcoal: '#2C2A29',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
