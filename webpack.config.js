'use strict';

const path = require('path');
const webpack = require('webpack');
//const autoprefixer = require('autoprefixer');
// const precss = require('precss');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

//let appEntry;
//let devtool;
//let plugins;


module.exports = {
    devtool: 'cheap-module-source-map',


    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },


    plugins: [
    new webpack.DefinePlugin({
         'process.env': {
           'NODE_ENV': JSON.stringify('production')
         }
       })
     ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel']
            }
        ]
    }
};