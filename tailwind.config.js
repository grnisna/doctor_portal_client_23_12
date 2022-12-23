/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorsTheme: {
          primary: "#19D3AE",
          secondary: "#0FCFEC",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
