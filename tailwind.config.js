/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1c1917',
        secondary: '#FFE705',
      }
    },
    fontFamily: {
      robotoMed: ['Roboto Slab', 'serif']
    },
  },
  plugins: [],
}