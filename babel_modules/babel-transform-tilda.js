"use strict";
const path = require("path");

module.exports = function () {
    return {
        visitor: {
            ExportNamedDeclaration: resolver,
            ImportDeclaration: resolver
        }
    };
};

function resolver({node: {source}}, {file: {opts: {filename}}}) {
    if (source !== null && source.value.startsWith("~")) {
        let sourcePath = path.resolve(__dirname, "../src");
        let dirPath = path.dirname(filename);
        let tildaPath = path.relative(dirPath, sourcePath);
        source.value = `${tildaPath === "" ? "." : tildaPath}${source.value.slice(1)}`;
    }
}
