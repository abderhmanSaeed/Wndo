/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#ff002a",
          400: "#FF4B46",
          500: "#ff002a",
        },
        blueGray: {
          300: "#96A1AB",
          900: "#272833",
        },
        blue: {
          800: "#0D1863",
          900: "#011447",
          950: "#04043F",
        },
        gray: {
          40: "#FFF5F5",
          50: "#f7f7f7",
          100: "#F8F8F8",
          150: "#D9D9E0",
          200: "#E0E0E0",
          300: "#aaaaaa",
          400: "#969696",
          900: "#00000080",
          950: "#1C1C1C",
        },
        orange: {
          500: "#FFA90A",

        },
        purple: {
          300: "#524C72",
          400: "#545454",
        },
      },
      spacing: {
        4.5: "1.125rem",
      },
      height: {
        13: "3.125rem",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      lineHeight: {
        0: 0,
      },
    },
  },
  plugins: [],
};
