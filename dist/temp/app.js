"use strict";

var _for = require("babel-runtime/core-js/symbol/for");

var _for2 = _interopRequireDefault(_for);

require("whatwg-fetch");

var _indexPage = require("./component/index-page/index-page");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("babel-polyfill");

document.addEventListener("DOMContentLoaded", function () {
    _indexPage.IndexPage[(0, _for2.default)("render")]();
    _indexPage.IndexPage.instnce.loadNews().then(function () {
        return startUpdate();
    });

    function startUpdate() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30000;

        setTimeout(function () {
            return _indexPage.IndexPage.instnce.loadNews().then(function () {
                return startUpdate(delay);
            });
        }, delay);
    }
});