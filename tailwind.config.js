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
        teal:  "#0D7377",
        accent: "#14FFEC",
      },
    },
  },
  plugins: [],
};