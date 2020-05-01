// if (process.env.NODE_ENV === "development") {
//   console.log("loading envs from .env cause NODE_ENV=" + process.env.NODE_ENV)
//   require("dotenv").config({
//     path: `.env`,
//   })
// }

const path = require("path")

function s3Plugin() {
  if (!process.env.GATSBY_STAGE) {
    throw new Error("s3Plugin requires GATSBY_STAGE env")
  }
  let domainName
  switch (process.env.GATSBY_STAGE) {
    case "staging":
      domainName = "staging.ridersbible.com"
      break
    case "production":
      domainName = "www.ridersbible.com"
      break
  }
  return {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: domainName,
      region: "eu-west-2",
      protocol: "https",
      hostname: domainName,
      removeNonexistentObjects: true,
      generateRoutingRules: true,
      generateRedirectObjectsForPermanentRedirects: false,
      generateIndexPageForRedirect: false,
      generateMatchPathRewrites: false,
    },
  }
}

const plugins = [
  `gatsby-plugin-react-helmet`,
  "gatsby-plugin-less",
  {
    resolve: `gatsby-plugin-alias-imports`,
    options: {
      alias: {
        "src": path.resolve(__dirname, "src"),
        "components": path.resolve(__dirname, "src/components"),
        "model": path.resolve(__dirname, "src/model"),
        "api": path.resolve(__dirname, "src/api"),
        "layouts": path.resolve(__dirname, "src/layouts"),
        "utils": path.resolve(__dirname, "src/utils"),
      },
      extensions: [
        "tsx", "ts", "js", "jsx",
      ],
    },
  },
  // {
  //   resolve: `gatsby-plugin-manifest`,
  //   options: {
  //     name: `Guided`,
  //     short_name: `Guided`,
  //     start_url: `/`,
  //     background_color: `#999999`,
  //     theme_color: `#999999`,
  //     display: `minimal-ui`,
  //   },
  // },
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
]

if (process.env.GATSBY_STAGE) {
  plugins.push(s3Plugin())
}

module.exports = {
  siteMetadata: {
    title: `Guided`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
  },
  plugins,
}
