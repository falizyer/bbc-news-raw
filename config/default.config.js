"use strict";
const path = require("path");
const {argv} = require("yargs");

const config = {
    get context() {
        return path.resolve(__dirname, "../");
    },
    nodeModules: {
        path: "./node_modules"
    },
    source: {
        path: "./src",
        get entry() {
            let dev = [
                "webpack-dev-server/client?http://0.0.0.0:8080",
                "webpack/hot/dev-server",
                `./${path.join(this.path, "main.js")}`
            ];
            let prod = {
                "main": `./${path.join(this.path, "main.js")}`
            };
            return argv.production === true ? prod : dev;
        },
        assets: {
            get path() {
                return path.join(config.source.path, "asset");
            }
        },
        component: {
            get path() {
                return path.join(config.source.path, "component");
            },
            pathByName(name) {
                return `./${path.join(this.path, name, name)}.js`;
            }
        }
    },
    dist: {
        path: "./dist",
        assets: {
            get path() {
                return path.join(config.dist.path, "asset");
            }
        }
    },
    babel: {
        presets: ["es2015"],
        plugins: []
    },
    autoprefixer: {
        browsers: ["last 2 versions"],
        cascade: false
    }
};

module.exports = config;
