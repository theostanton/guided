module.exports = {
  resolve: {
    alias: {
      "react-native$": "react-native-web"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(react-|@react-)\/).*/,
        loader: 'babel-loader'
      },
    ]
  }
};