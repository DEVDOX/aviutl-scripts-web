const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "class",
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Brands */
        google: {
          DEFAULT: "#d32f2f",
          dark: "#b71c1c",
        },
        twitter: {
          light5: "#35abf3",
          DEFAULT: "#1da1f2",
          dark5: "#0d95e8",
        },
        discord: {
          light5: "#869adf",
          DEFAULT: "#7289da",
          dark5: "#5e78d5",
        },
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['active'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
