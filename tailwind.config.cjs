/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "sans":['Poppins', 'sans-serif']
    },
    extend: {

      boxShadow:{
        viGi:" 10px 10px 4px 5px rgba(0, 0, 0, 0.2)",
        'cardShadow':"0px 5px 7px 1px rgba(0, 0, 0, 0.25)"
      },


      animation:{
        "start":"pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite "
      },
      colors:{
        'backgroundColorApp': 'rgba(30, 27, 24, 0.9)',
      }
    },
  },
  plugins: [],
}