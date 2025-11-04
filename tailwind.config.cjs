/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        emmyblue: '#07106b',
        emmyaccent: '#7c3aed'
      },
      fontFamily: {
        serifhead: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
