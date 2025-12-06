export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
  daisyui: {
    themes:[
      "light",
      "dark",
      "cupcake",
      "retro"
    ],
  }
};
