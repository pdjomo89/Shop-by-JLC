/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary — orange from the logo's triangle
        brand: {
          50: "#fff5ec",
          100: "#ffe5cc",
          200: "#ffc89a",
          300: "#fda866",
          400: "#f48a3d",
          500: "#ee7d2e",
          600: "#d96514",
          700: "#b34e0f",
          800: "#8c3d0f",
          900: "#6b2f0d",
        },
        // Accent — emerald from the logo's "L"
        accent: {
          50: "#ecf8f1",
          100: "#cfedda",
          200: "#a3dcb8",
          300: "#74c993",
          400: "#54b87a",
          500: "#4fad7b",
          600: "#3a8e62",
          700: "#2f7150",
          800: "#285b41",
          900: "#214a36",
        },
        // Neutral — charcoal from the logo's frame & wordmark
        ink: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#cfcfcf",
          300: "#a8a8a8",
          400: "#7a7a7a",
          500: "#555555",
          600: "#3f3f3f",
          700: "#333333",
          800: "#262626",
          900: "#1a1a1a",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(238, 125, 46, 0.25)",
      },
    },
  },
  plugins: [],
};
