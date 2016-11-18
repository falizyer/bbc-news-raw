"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = exports.User = function () {
    function User(userId, apiKey) {
        (0, _classCallCheck3.default)(this, User);

        this.userId = userId;
        this.apiKey = apiKey;
    }

    (0, _createClass3.default)(User, [{
        key: "getUserId",
        value: function getUserId() {
            return this.userId;
        }
    }, {
        key: "getApiKey",
        value: function getApiKey() {
            return this.apiKey;
        }
    }]);
    return User;
}();