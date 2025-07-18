/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        rajdhani: ['"Rajdhani"', "sans-serif", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: {
       '@tailwindcss/postcss': {}, // or:  tailwindcss: { config: './tailwind.config.js' }
       // Other plugins
  }
}

