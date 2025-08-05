// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pistachio: {
          light: "#a8d5ba",
          DEFAULT: "#669e41",
          dark: "#4e6d3a",
        },
      },
    },
  },
  plugins: [],
};
