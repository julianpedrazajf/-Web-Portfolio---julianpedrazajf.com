/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark1: "#212121",
        dark2: "#323232",
        teal:  "#A0153E",
        accent: "#FF004D",
      },
    },
  },
  plugins: [],
};