"use strict";
const argv = require("yargs").argv;
const path = require("path");
const webpack = require("webpack");
const LicenseWebpackPlugin = require("license-webpack-plugin");

function isExternal(module) {
    let userRequest = module.userRequest;

    if (typeof userRequest !== "string") {
        return false;
    }

    return userRequest.indexOf("bower_components") >= 0 ||
        userRequest.indexOf("node_modules") >= 0 ||
        userRequest.indexOf("libraries") >= 0 ||
        userRequest.indexOf("!") < 0;
}

const webpackConfig = {
    context: config.context,
    entry: config.source.entry,
    devtool: "source-map",
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
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(argv.ENV)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            chunks: ["common"],
            minChunks(module)  {
                return isExternal(module);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "common.js",
            minChunks(module, count)  {
                return !isExternal(module) && count >= 2;
            }
        }),
        new LicenseWebpackPlugin({
            filename: "./3RD-PARTY.LICENSE",
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
