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
      },
      maxWidth: {
        16: "4rem",
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
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("@tailwindcss/typography"),
  ],
}
