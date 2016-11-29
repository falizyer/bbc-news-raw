"use strict";
const webpack = require("webpack");
const LicenseWebpackPlugin = require("license-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                production: process.env.production
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
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
        }),
        new HtmlWebpackPlugin({
            template: "./index.ejs",
            target: "head"
        })
    ]
};

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
