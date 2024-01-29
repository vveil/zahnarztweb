/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "source-sans": ['"Source Sans 3"', "sans-serif"],
      // sans: ['"Source Sans Pro"', "sans-serif"],
      // special: ['"Source Serif 4"', "serif"],
    },
    extend: {
      colors: {
        "very-light-blue": "#EBF3F6",
        "dark-blue": "#0D2E3A",
        "light-teal": "#EBF3F6",
        "dark-teal": "#DCE7EA",
        highlight: "#3B7C95",
        "highlight-dark": "#154A5F",
      },
      dropShadow: {
        solid: "4px 4px 0px rgba(60, 137, 128, 1)",
        "solid-dark": "4px 4px 0px rgba(21, 74, 95, 1)",
        "solid-light": "1px 2px 0px rgba(217, 232, 234, 1)",
      },
    },
  },
  plugins: [],
};
