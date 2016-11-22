define(["exports", "./helpers"], function (exports, _helpers) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Repository = exports.ResponseType = exports.RequestCache = exports.RequestMode = exports.RequestMethod = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

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
        _createClass(Repository, null, [{
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

            _classCallCheck(this, Repository);

            this.url = url;
            this.headers = headers;
        }

        _createClass(Repository, [{
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
});