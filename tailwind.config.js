/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'bolder' : 700,
        'extra-bold' : 800 
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

