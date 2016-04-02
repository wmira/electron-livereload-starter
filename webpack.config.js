
var path = require('path');
var plugins = [];

module.exports = {
    devtool: 'source-map',
    resolve: {
        alias: {}
    },
    output: {
        //path.join ensures this works in other OS
        path: path.join(__dirname, ''),
        filename: 'bundle.js',
        //publicPath here ('dist') should match content-base on package.json
        publicPath: 'http://localhost:8080/',
    },
    plugins: plugins,
    module: {
        loaders: [
            {test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
