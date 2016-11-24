"use strict";
const path = require("path");
const webpack = require("webpack");
const LicenseWebpackPlugin = require("license-webpack-plugin");
const config = require("./default.config");

function isExternal(module) {
    let userRequest = module.userRequest;

    if (typeof userRequest !== "string") {
        return false;
    }
    console.log(userRequest);
    return userRequest.indexOf("bower_components") >= 0 ||
        userRequest.indexOf("node_modules") >= 0 &&
        userRequest.indexOf(path.join("sass-loader", "index.js!")) === -1;
}

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
        extensions: ["", ".css", ".scss", ".js"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendors",
            filename: "vendors.js",
            minChunks(module) {
                return isExternal(module);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: "common.js",
            minChunks(module, count) {
                return !isExternal(module) && count >= 2; // adjustable cond
            }
        }),
        new LicenseWebpackPlugin({
            filename: "./dist/3RD-PARTY.LICENSE",
            pattern: /^(MIT|ISC|BSD.*)$/
        })
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
    }
};

module.exports = webpackConfig;
