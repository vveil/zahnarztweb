/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "1024px",
      md: "1536px",
      lg: "1920px",
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', "sans-serif"],
      special: ['"Source Serif 4"', "serif"],
    },
    extend: {
      colors: {
        "black-normal": "#0D2E3A",
        "light-teal": "#EBF3F6",
        "dark-teal": "#CDD9DE",
        highlight: "#3B7C95",
        "highlight-light": "#669CB2",
      },
    },
  },
  plugins: [],
};
