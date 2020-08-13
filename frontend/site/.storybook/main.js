const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.[tj]sx"],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async (config, {configType}) => {


    config.resolve = {
      modules: ["node_modules"],
      extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx", '.ts', '.tsx'],
      alias: {
        "react-native": "react-native-web"
      }
    };

    config.module.rules.push({
      test: /\.ttf$/,
      loader: "url-loader", // or directly file-loader
      include: path.resolve(__dirname, '../', "node_modules/react-native-vector-icons"),
    });

    config.module.rules.push({
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name: 'assets/[name].[ext]'
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }
        ]
      }
    );

    config.module.rules.push({
        test: /\.js$/,
        include: path.resolve(__dirname, '../', "node_modules/react-native-vector-icons"),
        loader: 'babel-loader'
      }
    );
    config.module.rules.push({
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    );
    return config;
  },
};