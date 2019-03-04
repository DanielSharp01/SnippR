var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./client/index.js",
        login: "./client/login.js"
    },
    output: {
        path: path.resolve(__dirname, "static"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            { test: /\.(css)$/, use: ["style-loader", "css-loader"] },
            { test: /\.(scss)$/, use: ["style-loader", "css-loader", "sass-loader"] }
        ]
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "client/templates/index.html",
            chunks: ["index"]
        }),
        new HtmlWebpackPlugin({
            filename: "login.html",
            template: "client/templates/login.html",
            chunks: ["login"]
        })
    ]
};