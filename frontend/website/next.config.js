const path = require("path")

module.exports = () => {
  return {
    webpack(config, { defaultLoaders }) {
      config.module.rules.push({
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "../components/dist/")],
        use: [defaultLoaders.babel],
      })
      config.resolve.alias["@guided/components"] = "../components/dist"
      return config
    },
  }
}