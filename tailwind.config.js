module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
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
        },
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/typography"),
  ],
}
