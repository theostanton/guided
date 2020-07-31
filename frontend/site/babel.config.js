module.exports = {
  presets: [
    'babel-preset-expo',
    'module:metro-react-native-babel-preset',
    "mobx"
  ],
  plugins: [
    [
      'module-resolver',
      {
        'root': [
          './src',
        ],
        'alias': {
          'api': './src/api',
          'components': './src/components',
          'pages': './src/pages',
          'stores': './src/stores',
          'screens': './src/screens',
          'styles': './src/styles',
          'utils': './src/utils',
        },
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true,
      },
    ],
    // ['@babel/plugin-proposal-class-properties', {'loose': true}],
  ],
};
