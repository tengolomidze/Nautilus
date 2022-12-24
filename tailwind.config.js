/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif']
      },
      colors: {
        'main': "rgb(74 222 128)",
        'bg': "rgb(20 20 20)",
      }
    },
  },
  plugins: [],
}
