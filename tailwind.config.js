/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  safelist: ["bg-banner"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(12deg, black, #6ab5f659), url('./imgs/banner.png')",
      },
      colors: {
        testcolor: "#ff00ff",
      },
    },
  },
  plugins: [],
};
