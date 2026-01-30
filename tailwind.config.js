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
        "ku-blue": "#83c0da",
        "ku-button": "#918779",
        "ku-faded": "#707086",
        "ku-orange": "#ef8200",
        "ku-orange-hover": "#f08e18",
        "ku-placeholder": "#d1c2ad",
        "ku-secondary": "#0f172a",
        "main-background": "#faf2e8",
        "ku-border": "#e4d7c5",
        "ku-orange-50": "#ef820080",
        "ku-border-hover": "#e4d7c5cc",
      },
    },
  },
};
