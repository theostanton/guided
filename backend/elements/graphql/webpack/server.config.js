const path = require('path')
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = {
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js',
        library: '',
        libraryTarget: 'commonjs',
    },
    entry: {
        main: './srv/server.js',
    },
    mode: 'production',
    target: 'node',
    plugins: [
        // Prevent loading pg-native (in a weird, backwards kind of way!)
        ...[
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"production"',
                'process.env.POSTGRAPHILE_ENV': '"production"',
                'process.env.NODE_PG_FORCE_NATIVE': JSON.stringify('1'),
                'process.env.POSTGRAPHILE_OMIT_ASSETS': '"0"',
            }),
            new webpack.NormalModuleReplacementPlugin(
                /pg\/lib\/native\/index\.js$/,
                '../client.js'
            ),
        ],

        // Just in case you install express:
        new webpack.NormalModuleReplacementPlugin(
            /express\/lib\/view\.js$/,
            `${__dirname}/express-lib-view.js`
        ),
    ].concat(process.env.BUILD ? [] : [new BundleAnalyzerPlugin()]),
    node: {
        __dirname: false, // just output `__dirname`
    },
    optimization: {
        // splitChunks: {
        //   chunks: "all",
        // },
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    // Without this, you may get errors such as
                    // `Error: GraphQL conflict for 'e' detected! Multiple versions of graphql exist in your node_modules?`
                    mangle: false,
                },
            }),
        ],
    },
}
