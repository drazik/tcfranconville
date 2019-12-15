require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` })

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
    title: `TC Franconville`,
    description: `Club de tennis convivial. 9 courts de tennis dont 3 couverts  et 2 extérieurs éclairés.`
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-svgr',
    // {
    //   resolve: 'gatsby-plugin-react-svg',
    //   options: {
    //     rule: {
    //       include: /images\/icons/
    //     }
    //   }
    // },
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-source-facebook`,
      options: {
        places: [`TCFranconvilleOfficiel`],
        params: {
          fields: fbQuery,
        },
        key: process.env.FB_TOKEN
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
