const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        snippets: "./src/client/snippets.js",
        tags: "./src/client/tags.js",
        login: "./src/client/login.js",
        bootstrap: "./src/client/styles/bootstrap.scss",
        general: "./src/client/styles/general.scss"
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            { test: /\.(css|scss|sass)$/, use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"] }
        ]
    },
    resolve: {
        alias: {
          styles: path.resolve(__dirname, 'src/client/styles/'),
          components: path.resolve(__dirname, 'src/components/'),
          masonry: path.resolve(__dirname, 'src/masonry/')
        }
    },
    mode: "development",
    plugins: [
        new HtmlWebpackPlugin({
            filename: "prototype/index.html",
            template: "src/client/templates/index.html",
            chunks: ["snippets", "common", "bootstrap", "general"]
        }),
        new HtmlWebpackPlugin({
            filename: "prototype/tags.html",
            template: "src/client/templates/tags.html",
            chunks: ["tags", "common", "bootstrap", "general"]
        }),
        new HtmlWebpackPlugin({
            filename: "prototype/login.html",
            template: "src/client/templates/login.html",
            chunks: ["login", "common", "bootstrap", "general"]
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "[id].css"
          })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {test: /[\\/]node_modules[\\/]/, name: "common", chunks: "all", enforce: true}
            }
        }
    }
};