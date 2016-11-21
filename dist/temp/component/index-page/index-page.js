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

var _articleList = require("..\\../shared/article-list/article-list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexPageTpl = "<section id=\"content\" class=\"page-content\">\r\n    <h2 class=\"title\">BBC News</h2>\r\n    <ol class=\"article-list\" article-list></ol>\r\n    <a href=\"https://newsapi.org/\">Powered by News API</a>\r\n</section>";

var IndexPage = exports.IndexPage = function () {
    (0, _createClass3.default)(IndexPage, null, [{
        key: (0, _for2.default)("render"),
        value: function value() {
            IndexPage.instnce[(0, _for2.default)("render")]();
        }
    }, {
        key: "instnce",
        get: function get() {
            return this._instance === void 0 ? this._instance = new IndexPage(document.querySelector("html")) : this._instance;
        }
    }]);

    function IndexPage(parent) {
        (0, _classCallCheck3.default)(this, IndexPage);

        this.element = parent.querySelector("body");
        this._instance = void 0;
        this.articleList = new _articleList.ArticleList(this.element);
        this.user = {
            getApiKey: function getApiKey() {
                return "cbf7163e029d46be9533f928a0c9228f";
            }
        };
    }

    (0, _createClass3.default)(IndexPage, [{
        key: "loadNews",
        value: function loadNews() {
            var _this = this;

            this.articleList.showSpinner();
            return _newsApi.NewsApiRepository.getArticles(this.user, _newsApi.NewsApiSource.BBC_NEWS).then(function (response) {
                var articles = response.articles;

                _this.articleList[(0, _for2.default)("update")](articles);
                _this.articleList.showSpinner(false);
            });
        }
    }, {
        key: (0, _for2.default)("render"),
        value: function value() {
            this.element.innerHTML = indexPageTpl;
            this.articleList[(0, _for2.default)("render")]();
        }
    }]);
    return IndexPage;
}();