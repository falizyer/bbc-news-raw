"use strict";

const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./config/webpack.config");

new WebpackDevServer(webpack(config), config.devServer)
    .listen(8080, "localhost", () => console.log("started"));
