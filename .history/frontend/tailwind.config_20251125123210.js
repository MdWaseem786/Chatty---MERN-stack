export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisy],
  daisyui: {
    themes:[
      "light",
      "dark",
      "cupcake",
      "retro"
    ],
  }
};
