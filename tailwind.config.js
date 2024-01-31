/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      Primary:'#0A0A0A',
      Secondary:'#000000'
      },
    },
  },
  plugins: [],
};
