require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const fbQuery = `posts {
  message,
  created_time,
  id,
  permalink_url,
  attachments {
    url,
    type,
    title,
    media,
    target
  }
}`

module.exports = {
  siteMetadata: {
    title: `Tennis Club Franconville`,
    description: `Club de tennis convivial à Franconville (Val d'Oise). 9 courts de tennis dont 3 couverts  et 2 extérieurs éclairés.`,
    author: 'TC Franconville',
    baseUrl: 'https://tcfranconville.fr',
  },
  plugins: [
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
    'gatsby-plugin-svgr',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`TCFranconvilleOfficiel`],
        params: {
          fields: fbQuery,
        },
        key: process.env.FB_TOKEN,
      },
    },
    'gatsby-plugin-offline',
  ],
}
