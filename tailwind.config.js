/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'blue1': '#06286E',
        'blue2':'#164EC0'
      },
      fontFamily:{
        "montserrat":"Montserrat",
        "inter":"Inter"
      },
      borderColor: {
        "border-gradient": 'linear-gradient(90.26deg, #217EEC -1.17%, #082299 102.11%)',
      },
    },
  },
  plugins: [],
}

