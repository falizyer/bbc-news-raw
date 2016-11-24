"use strict";
const path = require("path");
const config = require("./default.config");

const webpackConfig = {
    context: config.context,
    entry: config.source.entry,
    devtool: "source-map",
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules"],
        extensions: ["", ".js"]
    },
    plugins: [],
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
        }]
    }
};

module.exports = webpackConfig;
