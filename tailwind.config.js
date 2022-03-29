const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#292929",
        secondary: "#35208C",
      },

      backgroundImage: {
        heroImg: "url('/src/images/square.png')",
      },
    },
  },
  plugins: [],
};
