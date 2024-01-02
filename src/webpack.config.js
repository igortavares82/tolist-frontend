const webpack = require('webpack')
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        alias: {
            modules: [path.resolve(__dirname, 'node_modules')],
        }
    },
    plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({template: "public/index.html"})],
    module: {  
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/env", 
                            ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
                loader: 'file-loader'
            }
        ]
    }
}