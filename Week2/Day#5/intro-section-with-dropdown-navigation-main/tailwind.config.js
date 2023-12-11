/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        almostWhite: "#fafafa",
        mediumGray: "#696969",
        almostBlack: "#141414",
      },
    },
  },
  plugins: [],
};
