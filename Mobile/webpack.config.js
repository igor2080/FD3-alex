const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/App.js",
    mode: 'development',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        static: {
          directory: './src',
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