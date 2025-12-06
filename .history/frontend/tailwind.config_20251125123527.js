/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["daisyui"         // <-- IMPORTANT],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "retro"                   // <-- your theme is here
    ],
  },
};
