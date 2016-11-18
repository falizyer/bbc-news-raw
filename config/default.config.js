"use strict";
const path = require("path");

const config = {
    get context() {
        return path.resolve(__dirname, "../");
    },
    nodeModules: {
        path: "./node_modules"
    },
    temp: {
        path: "./temp"
    },
    source: {
        path: "./src",
        get entry() {
            return [
                path.join(this.path, "app.js"),
                path.join(this.path, "**/*.js")
            ];
        },
        assets: {
            get path() {
                return path.join(config.source.path, "asset")
            },
            get scss() {
                return [
                    path.join(this.path, "default.style.scss")
                ];
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
        plugins: [
            "transform-es2015-modules-commonjs",
            "transform-runtime",
            require("../babel_modules/babel-transform-equal"),
            require("../babel_modules/babel-transform-tilda")
        ]
    },
    autoprefixer: {
        browsers: ["last 2 versions"],
        cascade: false
    },
    browserify: {
        insertGlobals: true,
        transform: ["babelify"],
        extensions: ['.js']
    }
};

module.exports = config;
