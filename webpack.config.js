var path = require("path");
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('config');

module.exports = {
    entry: './src/app/entry.js',
    output: {
        //filename: 'app.bundle.min.js',
        path: path.resolve(__dirname, './dist')
    },
    resolve: {
        alias: {
            config: path.join(__dirname, './src/app/config/js', process.env.NODE_ENV)
        }
    },
    plugins: [

        new webpack.ProvidePlugin({
            config: 'config'
        }),

        new HtmlWebpackPlugin({

        }),

        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false
        })
    ]
};