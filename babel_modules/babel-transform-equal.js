"use strict";

module.exports = function () {
    return {
        visitor: {
            BinaryExpression(path) {
                if (path.node.operator === "==") {
                    path.node.operator = "===";
                }
            }
        }
    };
};
