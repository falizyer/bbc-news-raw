"use strict";
const path = require("path");

const config = {
    context: path.resolve(__dirname, "../"),
    source: {
        path: "./src",
        get entry() {
            return {
                "app": `./${path.join(config.source.path, "app.js")}`
            };
        },
        assets: {
            get path() {
                return path.join(config.source.path, "assets");
            },
            get scss() {
                return [
                    path.join(config.source.path, "default.style.scss")
                ];
            }
        }
    },
    dist: {
        path: "./dist",
        get scripts() {
            return [
                path.join(this.path, "*.bundle.js"),
                path.join(this.path, "*.bundle.js.map")
            ];
        },
        assets: {
            get path() {
                return path.join(config.dist.path, "assets");
            },
            get scss() {
                return [
                    path.join(this.path, "*.style.scss")
                ];
            }
        }
    },
    babel: {
        presets: ["es2015"],
        plugins: [
            "transform-runtime"
        ]
    }
};

module.exports = config;
