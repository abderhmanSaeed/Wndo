/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          DEFAULT: '#ff002a',
          500: "#ff002a",
        },
        blueGray: {
          300: "#96A1AB",
        },
        blue: {
          900: "#011447",
        },
        gray: {
          100:"#F8F8F8",
          200: "#E0E0E0",
          300: "#aaaaaa",
          400: "#969696",
        }
      },

      height: {
        13: '3.125rem'
      },
      fontSize: {
        xxs: '0.625rem'
      },
      lineHeight: {
        0: 0
      }
    },
  },
  plugins: [],
}
