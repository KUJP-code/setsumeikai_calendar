/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      boxShadow: {
        "input-orange": "inset 0 0 0 2px #ef8200",
      },
      colors: {
        "ku-orange": "#ef8200",
        "ku-orange-hover": "#fo8e18:",
        "ku-secondary": "#0f172a",
        "ku-button": "#918779",
        "ku-blue": "#83c0da",
        "main-background": "#faf2e8",
        "ku-faded": "#707086",
      },
    },
  },
};
