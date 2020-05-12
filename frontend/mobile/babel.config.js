module.exports = function(api) {
  api.cache(true)
  return {
    "plugins": [
      [
        "module-resolver",
        {
          "root": ["."],
          "alias": {
            "components": "./src/components",
            "api": "./src/api",
            "model": "./src/model",
          },
        },
      ],
    ],
    presets: [
      "babel-preset-expo",
      // "module:metro-react-native-babel-preset",
      "module:react-native-dotenv",
    ],
  }
}