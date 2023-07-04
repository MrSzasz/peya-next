/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "peya-turquoise": "#00F9D2",
        "peya-yellow": "#FFD100",
        "peya-blue": "#004ADD",
        "peya-blue-hover": "#0043c7",
        "peya-dark": "#100423",
        "peya-red": "#FA0050",
        "peya-white": "#FFFFFF",
        "peya-white-hover": "#e6edfc"
      }, 
      gridTemplateColumns:{
        "promos-hero": "55% auto"
      },
      fontFamily:{
        "peya-titles": "textaHeavy"
      }
    },
  },
  plugins: [],
}