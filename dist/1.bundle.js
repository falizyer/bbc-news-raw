webpackJsonp([1,0,3],{

/***/ 354:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IndexPage = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _webElement = __webpack_require__(354);

	var _articleList = __webpack_require__(356);

	var _indexPageTpl = __webpack_require__(363);

	var _indexPageTpl2 = _interopRequireDefault(_indexPageTpl);

	__webpack_require__(364);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IndexPage = exports.IndexPage = function (_WebElement) {
	    _inherits(IndexPage, _WebElement);

	    _createClass(IndexPage, null, [{
	        key: _webElement.WebElement.render,
	        value: function value() {
	            IndexPage.instance[_webElement.WebElement.render]();
	        }
	    }, {
	        key: _webElement.WebElement.update,
	        value: function value(state) {
	            IndexPage.instance[_webElement.WebElement.update](state);
	        }
	    }, {
	        key: "instance",
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
	        return _this;
	    }

	    _createClass(IndexPage, [{
	        key: _webElement.WebElement.render,
	        value: function value() {
	            this.setElementHTML(_indexPageTpl2.default);
	            this.articleList[_webElement.WebElement.render]();
	        }
	    }, {
	        key: _webElement.WebElement.update,
	        value: function value(state) {
	            var articles = state.articles;

	            this.articleList[_webElement.WebElement.update](articles);
	        }
	    }]);

	    return IndexPage;
	}(_webElement.WebElement);

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ArticleList = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(301);

	var _webElement = __webpack_require__(354);

	var _fadingSpinnerTpl = __webpack_require__(357);

	var _fadingSpinnerTpl2 = _interopRequireDefault(_fadingSpinnerTpl);

	var _articleListTpl = __webpack_require__(358);

	var _articleListTpl2 = _interopRequireDefault(_articleListTpl);

	__webpack_require__(359);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	                    li.innerHTML = _fadingSpinnerTpl2.default;
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
	            var articles = (0, _lodash.uniqBy)(_articles, "url");
	            var clearList = (0, _lodash.intersectionBy)(this.articles, articles, "url");
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

	            this.articles = (0, _lodash.uniqBy)([].concat(_toConsumableArray(articles), _toConsumableArray(this.articles)), "url");
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
	                            return _articleListTpl2.default.replace(/(\$\{url\})/g, url).replace(/(\$\{description\})/g, description).replace(/(\$\{author\})/g, author).replace(/(\$\{publishedAt\})/g, date.toLocaleDateString() + " " + date.toLocaleTimeString()).replace(/(\$\{urlToImage\})/g, urlToImage);

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

/***/ },

/***/ 357:
/***/ function(module, exports) {

	module.exports = "<div class=\"sk-fading-circle\">\r\n    <div class=\"sk-circle1 sk-circle\"></div>\r\n    <div class=\"sk-circle2 sk-circle\"></div>\r\n    <div class=\"sk-circle3 sk-circle\"></div>\r\n    <div class=\"sk-circle4 sk-circle\"></div>\r\n    <div class=\"sk-circle5 sk-circle\"></div>\r\n    <div class=\"sk-circle6 sk-circle\"></div>\r\n    <div class=\"sk-circle7 sk-circle\"></div>\r\n    <div class=\"sk-circle8 sk-circle\"></div>\r\n    <div class=\"sk-circle9 sk-circle\"></div>\r\n    <div class=\"sk-circle10 sk-circle\"></div>\r\n    <div class=\"sk-circle11 sk-circle\"></div>\r\n    <div class=\"sk-circle12 sk-circle\"></div>\r\n</div>";

/***/ },

/***/ 358:
/***/ function(module, exports) {

	module.exports = "<a class=\"link\" href=\"${url}\">\r\n    <figure class=\"article-wrap\"><img class=\"image\" src=\"${urlToImage}\" title=\"${description}\"/></figure>\r\n    <article class=\"article\">\r\n        <header class=\"header\"><h3 class=\"header-title\">${description}</h3></header>\r\n        <footer class=\"footer\">\r\n            <abbr class=\"author\" title=\"${author}\">Author: ${author}</abbr>\r\n            <abbr class=\"published\" title=\"${publishedAt}\">Published: ${publishedAt}</abbr>\r\n        </footer>\r\n    </article>\r\n</a>";

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(360);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(362)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list.style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./article-list.style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 360:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(361)();
	// imports


	// module
	exports.push([module.id, "article-list,\n[article-list] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n  flex-direction: row;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  list-style-type: none;\n  padding: 0;\n  margin: 0; }\n  article-list .spinner-container,\n  [article-list] .spinner-container {\n    width: 100%; }\n  article-list .article-item,\n  [article-list] .article-item {\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    height: 300px;\n    width: calc(100% / 2); }\n    article-list .article-item .link,\n    [article-list] .article-item .link {\n      position: relative;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-positive: 1;\n      flex-grow: 1;\n      text-transform: none;\n      text-decoration: none;\n      text-shadow: 1px 1px 2px black, 0 0 1em black;\n      color: #EEE; }\n    article-list .article-item .link:hover,\n    [article-list] .article-item .link:hover {\n      color: #FFF; }\n      article-list .article-item .link:hover .image,\n      [article-list] .article-item .link:hover .image {\n        opacity: 1; }\n    article-list .article-item .article-wrap,\n    [article-list] .article-item .article-wrap {\n      display: -ms-flexbox;\n      display: flex;\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      z-index: 0;\n      margin: 0; }\n      article-list .article-item .article-wrap .image,\n      [article-list] .article-item .article-wrap .image {\n        width: 100%;\n        height: 100%;\n        opacity: .9; }\n    article-list .article-item .article,\n    [article-list] .article-item .article {\n      z-index: 1;\n      position: relative;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-direction: column;\n      flex-direction: column;\n      -ms-flex-pack: justify;\n      justify-content: space-between;\n      padding: 0 10px 10px;\n      width: 100%; }\n      article-list .article-item .article .header,\n      [article-list] .article-item .article .header {\n        display: -ms-flexbox;\n        display: flex;\n        position: relative; }\n        article-list .article-item .article .header .header-title,\n        [article-list] .article-item .article .header .header-title {\n          display: inline-block;\n          width: 100%; }\n      article-list .article-item .article .footer,\n      [article-list] .article-item .article .footer {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n        flex-direction: row;\n        -ms-flex-pack: justify;\n        justify-content: space-between; }\n  @media all and (max-width: 800px) {\n    article-list .article-item .footer,\n    [article-list] .article-item .footer {\n      -ms-flex-direction: column;\n      flex-direction: column; } }\n  @media all and (max-width: 600px) {\n    article-list .article-item,\n    [article-list] .article-item {\n      width: 100%; } }\n", ""]);

	// exports


/***/ },

/***/ 361:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 362:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 363:
/***/ function(module, exports) {

	module.exports = "<h2 class=\"title\">BBC News</h2>\r\n<ol class=\"article-list\" article-list></ol>\r\n<a href=\"https://newsapi.org/\">Powered by News API</a>";

/***/ },

/***/ 364:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(365);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(362)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./index-page.style.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/postcss-loader/index.js!./../../../node_modules/sass-loader/index.js!./index-page.style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 365:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(361)();
	// imports


	// module
	exports.push([module.id, "index-page,\n[index-page] {\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

	// exports


/***/ },

/***/ 366:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(367);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(362)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./main.style.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./main.style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 367:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(361)();
	// imports


	// module
	exports.push([module.id, "* {\n  box-sizing: border-box; }\n\nabbr, section, h1, h2, h3 footer, header {\n  display: inline-block; }\n\nhtml,\nbody {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  padding: 0;\n  margin: 0;\n  border: none;\n  -ms-flex-align: stretch;\n  align-items: stretch; }\n\nbody {\n  -ms-flex-align: center;\n  align-items: center;\n  background-color: #EEEFEA; }\n\n.page-content {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  max-width: 1024px;\n  background: #F0F0F0;\n  box-shadow: 0 0 20px rgba(205, 205, 205, 0.8); }\n  .page-content > .title {\n    padding-left: 10px; }\n", ""]);

	// exports


/***/ }

});