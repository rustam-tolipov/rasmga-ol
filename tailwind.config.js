/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#181818",
        "dark-text": "#B3B3B3",
        "dark-text-light": "#E5E5E5",
        "dark-border": "#3A3A3A",
        "dark-accent": "#2E2E2E",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      reelAspectRatio: {
        "9/16": "56.25%",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
