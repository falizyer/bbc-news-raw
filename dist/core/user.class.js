define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

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

    var User = exports.User = function () {
        function User(userId, apiKey) {
            _classCallCheck(this, User);

            this.userId = userId;
            this.apiKey = apiKey;
        }

        _createClass(User, [{
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
});