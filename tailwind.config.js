/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        "3xl": "1800px",
        "4xl": "3000px",
      },
      colors: {
        primary: {
          DEFAULT: "#ff002a",
          400: "#FF4B46",
          500: "#ff002a",
        },

        red: {
          500: "#FF002A"
        },

        blueGray: {
          200: "#9599B3",
          300: "#96A1AB",
          900: "#272833",
        },
        blue: {
          200: "#99A4CB",
          700: "#001D7D",
          800: "#0D1863",
          900: "#011447",
          950: "#04043F",
        },
        gray: {
          20: "#E5E6E8",
          30: "#EAECEE",
          40: "#FFF5F5",
          50: "#f7f7f7",
          100: "#F8F8F8",
          150: "#D9D9E0",
          200: "#E0E0E0",
          300: "#aaaaaa",
          350: "#8D8D8D",
          400: "#969696",
          500: "#9190905C",
          900: "#00000080",
          950: "#1C1C1C",
        },
        orange: {
          400: "#FFAD39",
          500: "#FFA90A",
          600: "#FFA800",
        },
        purple: {
          300: "#524C72",
          400: "#545454",
          500: "#4E4E78",
        },
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
      },
      height: {
        13: "3.125rem",
      },
      fontSize: {
        xxs: "0.625rem",
        '2.5xl': '1.75rem',
        '4.5xl': '2.5rem',
      },
      lineHeight: {
        0: 0,
      },
      boxShadow: {
        sm: "0px 3px 6px #00000029"
      }
    },
  },
  plugins: [require('flowbite/plugin')],
};
