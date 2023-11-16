/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        "ku-orange": "#ef8200",
		"ku-orange-hover": "#fo8e18:",
        "ku-secondary": "#918779",
        "ku-blue": "#83c0da",
		"main-background": "#faf2e8",
      },
    },
  },
};
