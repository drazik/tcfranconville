const path = require("path")
require("dotenv").config({ path: `.env` })

module.exports = {
  siteMetadata: {
    title: `Tennis Club Franconville`,
    description: `Club de tennis convivial à Franconville (Val d'Oise). 9 courts de tennis dont 3 couverts  et 2 extérieurs éclairés.`,
    author: "TC Franconville",
    siteUrl: "https://tcfranconville.fr",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tennis Club Franconville`,
        short_name: `TC Franconville`,
        start_url: `/`,
        background_color: `#fcf7f8`,
        theme_color: `#1a38b1`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-svgr",
    "gatsby-plugin-emotion",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-156539845-1",
        head: false,
        respectDNT: true,
      },
    },
    {
      resolve: "@builder.io/gatsby",
      options: {
        publicAPIKey: process.env.GATSBY_BUILDERIO_API_KEY,
        custom404Dev: path.resolve("src/pages/404.js"),
        templates: {
          page: path.resolve("src/templates/page.js"),
        },
      },
    },
  ],
}
