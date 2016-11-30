"use strict";
const path = require("path");
const {argv} = require("yargs");
const webpack = require("webpack");
const WebpackCleanPlugin = require("webpack-clean");
const config = require("./default.config");
const {plugins, devtool} = require(`./${argv.production === true ? "production" : "development" }.config`);

const webpackConfig = {
    context: config.context,
    entry: config.source.entry,
    devtool,
    output: {
        path: path.resolve(config.context, config.dist.path),
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        root: [path.resolve(config.context, config.source.path)],
        modulesDirectories: ["node_modules"],
        extensions: ["", ".css", ".scss", ".js"]
    },
    plugins: [
        new WebpackCleanPlugin([
            "dist/"
        ]),
        ...plugins
    ],
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: config.babel
        }, {
            test: /\.tpl.html$/,
            loader: "html"
        }, {
            test: /\.scss/,
            loader: ["style", "css", "postcss", "sass"].join("!")
        }]
    },
    devServer: {
        contentBase: path.resolve(config.context, config.dist.path),
        colors: true,
        progress: true,
        inline: true,
        hot: true
    }
};

module.exports = webpackConfig;
