const path = require("path");
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");

const withTM = require('next-transpile-modules')(['react-native-vector-icons', '@react-native-mapbox-gl/maps']);

module.exports = withCustomBabelConfigFile(withTM({
  babelConfigFile: path.resolve("./babel.web.js"),
  webpack: (config) => {

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      'react-native$': 'react-native-web',
    }
    config.resolve.extensions = [
      '.web.js',
      '.web.ts',
      '.web.tsx',
      ...config.resolve.extensions,
    ]
    return config
  }
}))
