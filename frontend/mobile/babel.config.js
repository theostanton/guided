module.exports = function(api) {
  api.cache(true)
  return {
    // plugins: [
    //   "@babel/plugin-proposal-decorators", { "legacy": true },
    // ],
    presets: [
      "babel-preset-expo",
      // "module:metro-react-native-babel-preset",
      "module:react-native-dotenv",
    ],
  }
}