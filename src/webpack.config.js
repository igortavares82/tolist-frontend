const webpack = require('webpack')
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
    entry: './src/index.js',
    output: {
        path:  path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        hot: true,
        port: 3001
    },
    resolve: {
        extensions: [
            '.web.tsx',
            '.web.ts',
            '.web.jsx',
            '.web.js',
            '.ts',
            '.tsx',
            '.js',
            '.jsx',
            '.json',
        ],
        alias: {
            modules: [path.resolve(__dirname, 'node_modules')],
        }
    },
    plugins: [
        new MiniCssExtractPlugin(), 
        new HtmlWebpackPlugin({template: "public/index.html"}),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(dotenv.parsed),
            'process.env.REACT_APP_BASENAME': JSON.stringify(process.env.REACT_APP_BASENAME),
            'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL)
        })
    ],
    module: {  
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react",
                            ['@babel/preset-env', {targets: {node: 'current'}}]
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
    },
    externals: {
    }
}