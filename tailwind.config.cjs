/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ['"Source Sans Pro"', "sans-serif"],
      special: ['"Source Serif 4"', "serif"],
    },
    extend: {
      colors: {
        "dark-blue": "#1F1156",
        "light-teal": "#EBF3F6",
        "dark-teal": "#CDD9DE",
        highlight: "#3B7C95",
        "highlight-light": "#50AACD",
      },
    },
  },
  plugins: [],
};
