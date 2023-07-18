/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#7C96AB",
        purple: "#B2A4FF",
        pink: "#E8A0BF",
        orange: "#FFD4B2",
        green: "#CEEDC7",
        yellow: "#FFF6BD",
        grayDark: "#555555",
        gray: "#CDC9C3",
        grayLight: "#FBF7F0",
      },
      fontFamily: {
        sans: ["Abel", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
    },
  },
  plugins: [],
};
