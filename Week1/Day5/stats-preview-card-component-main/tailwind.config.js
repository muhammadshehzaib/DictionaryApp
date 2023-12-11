/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        mypurple: "#1B1938",
        myblack: "#090B1A",
        textcolor: "#AA5CDB",
      },
    },
  },
  plugins: [],
};
