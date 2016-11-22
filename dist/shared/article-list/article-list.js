define(["exports", "..\\../core/web-element.abstract"], function (exports, _webElement) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ArticleList = undefined;

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

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

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

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

    var fadingSpinnerTpl = "<div class=\"sk-fading-circle\">\r\n    <div class=\"sk-circle1 sk-circle\"></div>\r\n    <div class=\"sk-circle2 sk-circle\"></div>\r\n    <div class=\"sk-circle3 sk-circle\"></div>\r\n    <div class=\"sk-circle4 sk-circle\"></div>\r\n    <div class=\"sk-circle5 sk-circle\"></div>\r\n    <div class=\"sk-circle6 sk-circle\"></div>\r\n    <div class=\"sk-circle7 sk-circle\"></div>\r\n    <div class=\"sk-circle8 sk-circle\"></div>\r\n    <div class=\"sk-circle9 sk-circle\"></div>\r\n    <div class=\"sk-circle10 sk-circle\"></div>\r\n    <div class=\"sk-circle11 sk-circle\"></div>\r\n    <div class=\"sk-circle12 sk-circle\"></div>\r\n</div>";
    var articleTpl = "<a class=\"link\" href=\"${url}\">\r\n    <figure class=\"article-wrap\"><img class=\"image\" src=\"${urlToImage}\" title=\"${description}\"/></figure>\r\n    <article class=\"article\">\r\n        <header class=\"header\"><h3 class=\"header-title\">${description}</h3></header>\r\n        <footer class=\"footer\">\r\n            <abbr class=\"author\" title=\"${author}\">Author: ${author}</abbr>\r\n            <abbr class=\"published\" title=\"${publishedAt}\">Published: ${publishedAt}</abbr>\r\n        </footer>\r\n    </article>\r\n</a>";

    var ArticleList = exports.ArticleList = function (_WebElement) {
        _inherits(ArticleList, _WebElement);

        function ArticleList(parent) {
            _classCallCheck(this, ArticleList);

            var _this = _possibleConstructorReturn(this, (ArticleList.__proto__ || Object.getPrototypeOf(ArticleList)).call(this, parent, {
                locator: "[article-list]"
            }));

            _this.articles = [];
            return _this;
        }

        _createClass(ArticleList, [{
            key: "showSpinner",
            value: function showSpinner() {
                var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

                if (isVisible === true) {
                    var _element = this.getElement();
                    var spinner = _element.querySelectorAll(".sk-fading-circle");
                    if (spinner.length < 1) {
                        var li = document.createElement("li");
                        li.classList.add("spinner-container");
                        li.innerHTML = fadingSpinnerTpl;
                        _element.appendChild(li);
                    }
                    return;
                }
                var element = this.parent.querySelector(this.locator);
                element.removeChild(element.querySelector("li.spinner-container"));
            }
        }, {
            key: _webElement.WebElement.render,
            value: function value() {
                var articlesTpl = this.getArticlesTpl(this.articles);
                this.setElementHTML([].concat(_toConsumableArray(articlesTpl)).join(""));
            }
        }, {
            key: _webElement.WebElement.update,
            value: function value(_articles) {
                var articles = _.uniqBy(_articles, "url");
                var clearList = _.intersectionBy(this.articles, articles, "url");
                var element = this.getElement();
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = clearList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var clearElement = _step.value;
                        var url = clearElement.url;

                        element.removeChild(element.querySelector("[href=\"" + url + "\"]").parentNode);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                this.articles = _.uniqBy([].concat(_toConsumableArray(articles), _toConsumableArray(this.articles)), "url");
                var articlesTpl = this.getArticlesTpl(articles);
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = articlesTpl[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        var _articleTpl = _step2.value;

                        var li = document.createElement("li");
                        li.classList.add("article-item");
                        li.innerHTML = _articleTpl;
                        element.insertBefore(li, element.firstChild);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        }, {
            key: "getArticlesTpl",
            value: regeneratorRuntime.mark(function getArticlesTpl() {
                var articles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.articles;

                var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, article, url, description, author, publishedAt, urlToImage, date;

                return regeneratorRuntime.wrap(function getArticlesTpl$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _iteratorNormalCompletion3 = true;
                                _didIteratorError3 = false;
                                _iteratorError3 = undefined;
                                _context.prev = 3;
                                _iterator3 = articles[Symbol.iterator]();

                            case 5:
                                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                    _context.next = 14;
                                    break;
                                }

                                article = _step3.value;
                                url = article.url, description = article.description, author = article.author, publishedAt = article.publishedAt, urlToImage = article.urlToImage;
                                date = new Date(publishedAt);
                                _context.next = 11;
                                return articleTpl.replace(/(\$\{url\})/g, url).replace(/(\$\{description\})/g, description).replace(/(\$\{author\})/g, author).replace(/(\$\{publishedAt\})/g, date.toLocaleDateString() + " " + date.toLocaleTimeString()).replace(/(\$\{urlToImage\})/g, urlToImage);

                            case 11:
                                _iteratorNormalCompletion3 = true;
                                _context.next = 5;
                                break;

                            case 14:
                                _context.next = 20;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context["catch"](3);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context.t0;

                            case 20:
                                _context.prev = 20;
                                _context.prev = 21;

                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }

                            case 23:
                                _context.prev = 23;

                                if (!_didIteratorError3) {
                                    _context.next = 26;
                                    break;
                                }

                                throw _iteratorError3;

                            case 26:
                                return _context.finish(23);

                            case 27:
                                return _context.finish(20);

                            case 28:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, getArticlesTpl, this, [[3, 16, 20, 28], [21,, 23, 27]]);
            })
        }]);

        return ArticleList;
    }(_webElement.WebElement);
});