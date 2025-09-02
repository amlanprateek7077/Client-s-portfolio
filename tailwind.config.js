/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
            main:'#2d2d2d',
            White: "#FFFFFF",
            Off_white: "#F5F5F5",
            Light_gray: "#D3D3D3",
            Medium_gray: "#808080",
            Dark_gray: "#333333", //gray
           
            Ivory: "#FFFFF0",//very light yellow
            Taupe: "#483C32", //dark brown 
            Charcoal:"#36454F", //dark fade blue
            Beige: "#F5F5DC", //yellow
            Sand:" #C2B280", //sand color
            salitary:"rgb(93,135,149)",
            lightsalmon:"rgb(255,190,124)",
            animatedText:"#030712",
            
    },
    backgroundImage:{
      orbitLight:' repeating-radial-gradient(rgb(0,0,0,0.5) 2px,#f5f5f5 5px,#f5f5f5 100px);'
    }
  },
  screens:{
    // @mediaQuery

    "2xl":{max:"1535px"},

    xl:{max:"1279px"},

    ld:{max:"1023px"},

    md:{max:"767px"},//ipad

    sm:{max:"639px"},

    xs:{max:"479px"}//phone

  },
},
  plugins: [],
}
