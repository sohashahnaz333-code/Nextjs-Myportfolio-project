/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-in-out",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        dark: "var(--color-dark)",
        light: "var(--color-light)",
        text: "var(--color-text)",
        bg: "var(--color-bg)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
