/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0097E5",
      secondary: "#1A1A1A",
    },

    fontFamily: {
      inter: ["Inter", "sans-serif"],
      grotesque: ["Darker Grotesque", "sans-serif"],
    },
  },
  plugins: [],
};
