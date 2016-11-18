"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IndexPage = undefined;

var _for = require("babel-runtime/core-js/symbol/for");

var _for2 = _interopRequireDefault(_for);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _newsApi = require("../../repository/news-api.repository");

var _articleList = require("../../shared/article-list/article-list");

var _user = require("../../core/user.class");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexPage = exports.IndexPage = function () {
    function IndexPage() {
        (0, _classCallCheck3.default)(this, IndexPage);

        var user = new _user.User("falizyer", "");
        _newsApi.NewsApiRepository.getArticles(user, _newsApi.NewsApiSource.BBC_NEWS);
    }

    (0, _createClass3.default)(IndexPage, [{
        key: (0, _for2.default)("render"),
        value: function value() {}
    }]);
    return IndexPage;
}();