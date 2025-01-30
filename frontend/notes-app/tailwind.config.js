/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
    },
    extend: {
      // Colors used in the project
      colors: {
        background: "#f4f4f9",
        primary: "#6366F1",
        secondary: "#FBBF24",
        text: "#333",
      }
    },
  },
  plugins: [],
}

