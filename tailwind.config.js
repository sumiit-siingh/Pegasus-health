/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "pegasus-blue": "#00B2FF",
        "pegasus-dark": "#111827",
      },
      animation: {
        blob: "blob 7s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
