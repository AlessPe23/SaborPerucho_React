/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'fondo1':"url('/public/fondosabor.jpg')",
        'fondohorno':"url('/public/horno.jpg')",
        'fondoabout':"url('/public/madera-fondo.avif')"
      }
    },
  },
  plugins: [],
};
