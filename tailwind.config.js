/** @type {import('tailwindcss').Config} */
const colors = ["#6341ef", "#40c2fc", "#fdb338", "#58c896"];
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [...colors.map((color) => `bg-[${color}]`)],
  theme: {
    extend: {
      colors: {
        secondaryFontColor: "#383838",
      },
    },
  },
  plugins: [],
};
