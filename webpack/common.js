/**
 * Created by yangbajing on 2016-09-20.
 */
var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');
var path = require('path');

var babelQuery = {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['transform-runtime', 'add-module-exports', 'transform-decorators-legacy'],
    cacheDirectory: true,
};

module.exports = {
    context: path.resolve(__dirname, '..'),
    node: {
        __dirname: true
    },
    entry: {
        // react: ['react', 'react-dom', 'react-router', 'react-redux', 'redux', 'react-router-redux', 'redux-thunk'],
        main: ['babel-polyfill',"./src/index.js"]
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/assets/'
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
            }
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
        }),
        new ExtractTextPlugin("[name].css", {
            allChunks: true
        }),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
        new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})
    ]
};