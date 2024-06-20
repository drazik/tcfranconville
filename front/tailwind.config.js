const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js", "./app/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        brand: "#1a38b1",
        orange: colors.orange,
      },
      inset: {
        "1/2": "50%",
      },
      spacing: {
        96: "24rem",
        "1/2": "50%",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "inherit",
            strong: {
              color: "inherit",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
