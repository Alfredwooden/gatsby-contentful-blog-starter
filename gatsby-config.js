module.exports = {
  siteMetadata: {
    title: `My Awesome Blog`,
    description: `An awesome blog displaying my awesome posts.`,
    author: `Alfredo Barros`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `mdy1v6002qwa`, // YOUR_SPACE_ID
        accessToken: `wCZH1vlSJkvGgVcbSftJR2X4oS-0ckuwok4w5Xaz9Cw`, // YOUR_CONTENT_DELIVERY_API_KEY
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
