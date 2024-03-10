/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-light": '#e5e5e5',
        "blue-dark": "#14213d",
        "yellow": "#fca311",
        "white": "#ffffff",
        "black": "#000000",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
        gil: ["gilroy", "sans-serif"]
      },

    },
  },
  plugins: [],
}