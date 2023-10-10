/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "ku-orange": "#ef8200",
        "ku-secondary": "#5a534a",
      },
    },
  },
  plugins: [],
};
