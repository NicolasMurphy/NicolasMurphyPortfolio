/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: [
      {
        corporate: {
          ...require("daisyui/src/theming/themes")["[data-theme=corporate]"],
          "neutral": "#4b6bfb",
        },
        business: {
          ...require("daisyui/src/theming/themes")["[data-theme=business]"],
          "neutral": "#1c4f82",
        },
      }
    ],
  },
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
