"use strict";
const path = require("path");

const config = {
    context: path.resolve(__dirname, "../"),
    source: {
        path: "./src",
        get entry() {
            return [
                path.join(this.path, "app.bundle.js")
            ];
        },
        assets: {
            get path() {
                return path.join(config.source.path, "assets")
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
                return path.join(config.dist.path, "assets");
            }
        }
    }
};

module.exports = config;
