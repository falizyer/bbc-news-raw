"use strict";
const config = require("./config/default.config");

module.exports = {
    plugins: [
        require('autoprefixer')(config.autoprefixer)
    ]
};
