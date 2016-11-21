"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Repository = exports.ResponseType = exports.RequestCache = exports.RequestMode = exports.RequestMethod = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _helpers = require("./helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RequestMethod = exports.RequestMethod = {
    GET: "GET"
};
(0, _helpers.readonly)(RequestMethod);

var RequestMode = exports.RequestMode = {
    CORS: "cors",
    NAVIGATE: "navigate",
    NO_CORS: "no-cors",
    SAME_ORIGIN: "same-origin"
};
(0, _helpers.readonly)(RequestMode);

var RequestCache = exports.RequestCache = {
    DEFAULT: "default",
    NO_CACHE: "no-cache"
};
(0, _helpers.readonly)(RequestCache);

var ResponseType = exports.ResponseType = {
    JSON: "json",
    TEXT: "text"
};
(0, _helpers.readonly)(RequestCache);

var Repository = exports.Repository = function () {
    (0, _createClass3.default)(Repository, null, [{
        key: "fetch",
        value: function (_fetch) {
            function fetch(_x, _x2) {
                return _fetch.apply(this, arguments);
            }

            fetch.toString = function () {
                return _fetch.toString();
            };

            return fetch;
        }(function (response, type) {
            var fetched = fetch(response);
            switch (type) {
                case ResponseType.TEXT:
                    return fetched.then(function (response) {
                        return response.text();
                    });
                case ResponseType.JSON:
                    return fetched.then(function (response) {
                        return response.json();
                    });
                default:
                    throw new Error("unknown response type");
            }
        })
    }, {
        key: "request",
        value: function request(url, properties, type) {
            var response = new Request(url, properties);
            return this.fetch(response, type);
        }
    }]);

    function Repository(url) {
        var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Headers();
        (0, _classCallCheck3.default)(this, Repository);

        this.url = url;
        this.headers = headers;
    }

    (0, _createClass3.default)(Repository, [{
        key: "getUrl",
        value: function getUrl() {
            return this.url;
        }
    }, {
        key: "getHeaders",
        value: function getHeaders() {
            return this.headers;
        }
    }]);
    return Repository;
}();