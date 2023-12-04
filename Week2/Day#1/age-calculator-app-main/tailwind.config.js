/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: "class",

  theme: {
    screens: {
      vsm: "491px",
      // => @media (min-width: 576px) { ... }
    },
    extend: {
      colors: {
        lightgrey: "#CCCCCC",
        Purple: "hsl(259, 100%, 65%)",
      },
    },
  },
  plugins: [],
};
