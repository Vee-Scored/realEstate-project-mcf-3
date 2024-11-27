/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/swiper/**/*.{js,css}",
  ],
  theme: {
    colors: {
      primary: {
        50: "#eff5ff",
        100: "#dbe8fe",
        200: "#bfd7fe",
        300: "#93bbfd",
        400: "#609afa",
        500: "#3b82f6",
        600: "#2570eb",
        700: "#1d64d8",
        800: "#1e55af",
        900: "#1e478a",
        950: "#172e54",
      },
      neutral: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#404040",
        950: "#262626",
      },
    },

    extend: {
      backgroundImage: {
        "error-pattern": "url('/src/assets/erroState.png')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Noto Sans Lao", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
