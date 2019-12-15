require('source-map-support').install();
require('ts-node').register({
    compilerOptions: {
        module: 'commonjs',
        target: 'es2017',
    },
});

exports.onCreatePage = require('./src/gatsby/onCreatePage').onCreatePage;
