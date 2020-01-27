const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Guided`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-less',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "src": path.resolve(__dirname, 'src'),
          "components": path.resolve(__dirname, 'src/components'),
          "api": path.resolve(__dirname, 'src/api'),
          "layouts": path.resolve(__dirname, 'src/layouts'),
          "utils": path.resolve(__dirname, 'src/utils'),
        },
        extensions: [
          'tsx','ts','js','jsx'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Guided`,
        short_name: `Guided`,
        start_url: `/`,
        background_color: `#999999`,
        theme_color: `#999999`,
        display: `minimal-ui`
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true,
      },
    },
  ],
}
