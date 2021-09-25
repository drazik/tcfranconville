module.exports = {
  mode: "jit",
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: "#1a38b1",
      },
      inset: {
        "1/2": "50%",
      },
      spacing: {
        96: "24rem",
        "1/2": "50%",
      },
    },
    typography: {
      default: {
        css: {
          color: "inherit",
          strong: {
            color: "inherit",
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/typography"),
  ],
}
