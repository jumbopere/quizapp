/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      animation: {
        active: 'progress 10s linear'
      },
      keyframes :{
progress : {
  
        "0%": {
          width: "0%",
          background: "#555"
        },
        "79%" :{
          width: "79%",
          background: "#555"},
        "80%": {
          width: "80%",
          background: "orangered"
      
        },
        "100%": {
          width: "100%",
          background: "orangered"
      
        },
      
}
    },
  },
  plugins: [],
}
}
