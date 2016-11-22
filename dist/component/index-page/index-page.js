define(["exports", "..\\../core/web-element.abstract", "..\\../repository/news-api.repository", "..\\../shared/article-list/article-list"], function (exports, _webElement, _newsApi, _articleList) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.IndexPage = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
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

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var indexPageTpl = "<h2 class=\"title\">BBC News</h2>\r\n<ol class=\"article-list\" article-list></ol>\r\n<a href=\"https://newsapi.org/\">Powered by News API</a>";

    var IndexPage = exports.IndexPage = function (_WebElement) {
        _inherits(IndexPage, _WebElement);

        _createClass(IndexPage, null, [{
            key: _webElement.WebElement.render,
            value: function value() {
                IndexPage.instnce[_webElement.WebElement.render]();
            }
        }, {
            key: "instnce",
            get: function get() {
                return this._instance === void 0 ? this._instance = new IndexPage(document.querySelector("html")) : this._instance;
            }
        }]);

        function IndexPage(parent) {
            _classCallCheck(this, IndexPage);

            var _this = _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).call(this, parent, {
                locator: "[index-page]"
            }));

            _this.articleList = new _articleList.ArticleList(_this.getElement());
            _this.user = {
                getApiKey: function getApiKey() {
                    return "cbf7163e029d46be9533f928a0c9228f";
                }
            };
            return _this;
        }

        _createClass(IndexPage, [{
            key: "loadNews",
            value: function loadNews() {
                var _this2 = this;

                this.articleList.showSpinner();
                return _newsApi.NewsApiRepository.getArticles(this.user, _newsApi.NewsApiSource.BBC_NEWS).then(function (response) {
                    var articles = response.articles;

                    _this2.articleList[_webElement.WebElement.update](articles);
                    _this2.articleList.showSpinner(false);
                });
            }
        }, {
            key: _webElement.WebElement.render,
            value: function value() {
                this.setElementHTML(indexPageTpl);
                this.articleList[_webElement.WebElement.render]();
            }
        }]);

        return IndexPage;
    }(_webElement.WebElement);
});