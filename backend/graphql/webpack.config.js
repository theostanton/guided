const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const slsw = require("serverless-webpack")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const ignorePlugin = new webpack.IgnorePlugin({
  checkResource(resource) {
    const lazyImports = [
      "cache-manager",
      "class-validator",
      "class-transformer",
    ]
    if (!lazyImports.includes(resource)) {
      return false
    }
    try {
      require.resolve(resource)
    } catch (err) {
      return true
    }
    return false
  },
})

module.exports = {
  entry: slsw.lib.entries,
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        // Include ts, tsx, js, and jsx files.
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(".webpackCache"),
            },
          },
          "babel-loader",
        ],
      },
    ],
  },
  plugins: [ignorePlugin],
  externals: [
    nodeExternals({
      whitelist: /^(?!(livereload|concurrently|pg)).*/,
    }),
  ],
  resolve: {
    mainFields: ["browser", "main", "module"],
    extensions: [".tsx", ".ts", ".js", ".json"],
    alias: {
      "pg-native": "webpack.dummy.js",
      "dns": "webpack.dummy.js",
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "node",
  node: {
    child_process: "empty",
    fs: "empty",
    crypto: "empty",
    net: "empty",
    tls: "empty",
  },
}