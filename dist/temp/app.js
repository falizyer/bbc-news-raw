"use strict";

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = require("babel-runtime/core-js/map");

var _map2 = _interopRequireDefault(_map);

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _iterator2 = require("babel-runtime/core-js/symbol/iterator");

var _iterator3 = _interopRequireDefault(_iterator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _indexPage = require("./component/index-page/index-page");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Repository = function () {
    function Repository(url) {
        (0, _classCallCheck3.default)(this, Repository);

        this.url = url;
        this.headers = new Headers();
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

var NewsApiSources = {
    SOURCE_BBC_NEWS: 0
};

var NewsApiRepository = function (_Repository) {
    (0, _inherits3.default)(NewsApiRepository, _Repository);
    (0, _createClass3.default)(NewsApiRepository, null, [{
        key: "getSourceName",
        value: function getSourceName(source) {
            switch (source) {
                case NewsApiSources.SOURCE_BBC_NEWS:
                    return "bbc-news";
                default:
                    throw Error("Unknown source");
            }
        }
    }]);

    function NewsApiRepository() {
        (0, _classCallCheck3.default)(this, NewsApiRepository);
        return (0, _possibleConstructorReturn3.default)(this, (NewsApiRepository.__proto__ || (0, _getPrototypeOf2.default)(NewsApiRepository)).call(this, "https://newsapi.org/v1"));
    }

    (0, _createClass3.default)(NewsApiRepository, [{
        key: "getArticles",
        value: function getArticles(source, apiKey) {
            var properties = {
                method: "GET",
                headers: this.getHeaders(),
                mode: "cors",
                cache: "default"
            };
            var response = new Request(this.getUrl() + "/articles?source=" + source + "&apiKey=" + apiKey, properties);
            return fetch(response).then(function (response) {
                return response.json();
            });
        }
    }]);
    return NewsApiRepository;
}(Repository);

var ArticleList = function () {
    function ArticleList(fetchedData) {
        (0, _classCallCheck3.default)(this, ArticleList);

        this.articles = fetchedData.articles;
        this.title = "BBC News";
    }

    (0, _createClass3.default)(ArticleList, [{
        key: "getTitle",
        value: function getTitle() {
            return this.title;
        }
    }, {
        key: _iterator3.default,
        value: _regenerator2.default.mark(function value() {
            var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, article, author, description, publishedAt, title, url, urlToImage, header, footer, tpl;

            return _regenerator2.default.wrap(function value$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _iteratorNormalCompletion = true;
                            _didIteratorError = false;
                            _iteratorError = undefined;
                            _context.prev = 3;
                            _iterator = (0, _getIterator3.default)(this.articles);

                        case 5:
                            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                _context.next = 16;
                                break;
                            }

                            article = _step.value;
                            author = article.author, description = article.description, publishedAt = article.publishedAt, title = article.title, url = article.url, urlToImage = article.urlToImage;
                            header = ["<header class=\"header\"><h3>" + description + "</h3></header>"];
                            footer = ["<footer class=\"footer\">", "<abbr class=\"author\" title=\"" + author + "\">Author: " + author + "</abbr>", "<abbr class=\"published\" title=\"" + publishedAt + "\">Published: " + publishedAt + "</abbr>", "</footer>"];
                            tpl = ["<li class=\"article-item\">", "<a class=\"link\" href=\"" + url + "\">", "<article class=\"article\">"].concat(header, footer, ["<figure class=\"article-wrap\"><img class=\"image\" src=\"" + urlToImage + "\" title=\"" + description + "\" /></figure>", "</article>", "</a>", "</li>"]);
                            _context.next = 13;
                            return tpl.join("\n");

                        case 13:
                            _iteratorNormalCompletion = true;
                            _context.next = 5;
                            break;

                        case 16:
                            _context.next = 22;
                            break;

                        case 18:
                            _context.prev = 18;
                            _context.t0 = _context["catch"](3);
                            _didIteratorError = true;
                            _iteratorError = _context.t0;

                        case 22:
                            _context.prev = 22;
                            _context.prev = 23;

                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }

                        case 25:
                            _context.prev = 25;

                            if (!_didIteratorError) {
                                _context.next = 28;
                                break;
                            }

                            throw _iteratorError;

                        case 28:
                            return _context.finish(25);

                        case 29:
                            return _context.finish(22);

                        case 30:
                        case "end":
                            return _context.stop();
                    }
                }
            }, value, this, [[3, 18, 22, 30], [23,, 25, 29]]);
        })
    }]);
    return ArticleList;
}();

var user = "falizyer";
var keyStore = new _map2.default();
keyStore.set(user, "cbf7163e029d46be9533f928a0c9228f");
var repo = new NewsApiRepository();

document.addEventListener("DOMContentLoaded", function () {
    var apiKey = keyStore.get(user);
    var sourceName = NewsApiRepository.getSourceName(NewsApiSources.SOURCE_BBC_NEWS);
    var articleListElement = document.getElementsByClassName("article-list").item(0);
    var articleTitleElement = document.getElementsByClassName("title").item(0);
    repo.getArticles(sourceName, apiKey).then(function (fetchedData) {
        return new ArticleList(fetchedData);
    }).then(function (articleList) {
        articleTitleElement.innerHTML = "<span class=\"title-text\">" + articleList.getTitle() + "</span>";
        articleListElement.innerHTML = [].concat((0, _toConsumableArray3.default)(articleList)).join("\n");
    }).catch(function (err) {
        console.log(err);
    });
});