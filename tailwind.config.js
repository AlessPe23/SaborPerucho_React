/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'fondo1':"url('/public/fondosabor.jpg')",
        'fondohorno':"url('/public/horno.jpg')",
        'fondoabout':"url('/public/madera-fondo.avif')",
        'mesa':"url('/public/mesa.jpeg')",
        'delive':"url('/public/delivery.png')",
        'fondohome':"url('/public/restaurant-dineout.gif')",
        'deligif':"url('/public/deliverygif.gif')",
        'fondo3':"url('/public/fondohome2.gif')",
        'fondo2':"url('/public/fondo3.avif')",
        'ubicacion':"url('/public/ubicacion.avif')"
      },
      colors:{
        'rojo':'#f48c06',
        'negro':'#bb3e03'
        
      },
      fontFamily:{
        'deli':['Pacifico','bold'],
        'deli':'normal,bold'
      }
    },
  },
  plugins: [],
};
