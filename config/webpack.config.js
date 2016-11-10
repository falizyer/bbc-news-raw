"use strict";
const path = require("path");
const webpack = require("webpack");
const config = require("./default.config");

module.exports = {
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
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: config.babel
        }, {
            test: /\.html$/,
            loader: "html"
        }]
    }
};
