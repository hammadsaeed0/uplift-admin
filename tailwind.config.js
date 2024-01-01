/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"#2D1B46",
        'secondary':"#903EE9",
        'red':"#FF0000",
        'green':"#5EAA22",
        'gulabi':"#FC17EC",
        'skyBlue':"#33B9EF",
        'orange':"#FF9100",
        'lightGray':"#F8F8F8",
        'darkGray':"#D9D9D933",
      }
    },
  },
  plugins: [],
}

