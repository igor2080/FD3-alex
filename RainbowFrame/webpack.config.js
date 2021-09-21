const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./App.js",
    mode: 'development',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        static: {
          directory: './',
        },
        port: 8080,
      },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: { loader: "babel-loader" }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        })
    ],
}