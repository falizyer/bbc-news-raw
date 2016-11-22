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

    var WebElement = exports.WebElement = function () {
        _createClass(WebElement, null, [{
            key: "render",
            get: function get() {
                return Symbol.for("render");
            }
        }, {
            key: "update",
            get: function get() {
                return Symbol.for("update");
            }
        }]);

        function WebElement(parent, settings) {
            _classCallCheck(this, WebElement);

            this.parent = parent;
            var locator = settings.locator;

            this.locator = locator;
        }

        _createClass(WebElement, [{
            key: "getElement",
            value: function getElement() {
                return this.parent.querySelector(this.locator);
            }
        }, {
            key: "setElementHTML",
            value: function setElementHTML(html) {
                var element = this.getElement();
                element.innerHTML = html;
            }
        }, {
            key: WebElement.render,
            value: function value() {}
        }, {
            key: WebElement.update,
            value: function value() {}
        }]);

        return WebElement;
    }();
});