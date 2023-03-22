/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {

colors:{
primary:"#e11931",
lightGray:"#f8f9fa",
secondary:"	#48bf53",
gray:"#4f4f4f",
yellow:"#ffb805",

},

fontSize:{

  huge:'clamp(2.4rem,6vw,3rem)',
},

fontFamily:{

  roboto:['Roboto','san-serif']
}

    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
       
      },
    }
  },
  plugins: [],
}
