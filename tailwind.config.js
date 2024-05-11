/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '800px',
      'tablet': '1100px'
    },
    colors: {
      "trinity-black": "#000000",
      "trinity-white": "#FFFFFF",
      "trinity-yellow": "#F0AB03",
      "trinity-purple": "#5C2672",
      "red": "#FF0000",
    },
    extend: {},
  },
  plugins: [],
}

