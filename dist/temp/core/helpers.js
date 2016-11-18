"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _freeze = require("babel-runtime/core-js/object/freeze");

var _freeze2 = _interopRequireDefault(_freeze);

exports.readonly = readonly;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readonly(target) {
    (0, _freeze2.default)(target);
}