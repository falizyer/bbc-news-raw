define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.readonly = readonly;
    function readonly(target) {
        Object.freeze(target);
    }
});