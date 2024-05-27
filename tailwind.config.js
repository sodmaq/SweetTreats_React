/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#110851",
        secondary: "#9A7AF1",
        tertiary: "#707070",
        pink: "#EE9AE5",
      },
    },
  },
  plugins: [],
};
