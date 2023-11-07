/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "ku-orange": "#ef8200",
        "ku-secondary": "#5a534a",
        "ku-blue": "#83c0da",
      },
    },
  },
};
