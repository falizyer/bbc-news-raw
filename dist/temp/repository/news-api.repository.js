"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NewsApiRepository = exports.NewsApiSource = undefined;

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _repository = require("../core/repository.abstract");

var _helpers = require("../core/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NewsApiSource = exports.NewsApiSource = {
    BBC_NEWS: "bbc-news"
};
(0, _helpers.readonly)(NewsApiSource);

var NewsApiRepositoryClass = function (_Repository) {
    (0, _inherits3.default)(NewsApiRepositoryClass, _Repository);

    function NewsApiRepositoryClass() {
        (0, _classCallCheck3.default)(this, NewsApiRepositoryClass);
        return (0, _possibleConstructorReturn3.default)(this, (NewsApiRepositoryClass.__proto__ || (0, _getPrototypeOf2.default)(NewsApiRepositoryClass)).call(this, "https://newsapi.org/v1"));
    }

    (0, _createClass3.default)(NewsApiRepositoryClass, [{
        key: "getArticles",
        value: function getArticles(user, source) {
            var properties = {
                method: _repository.RequestMethod.GET,
                headers: this.getHeaders(),
                mode: _repository.RequestMode.CORS,
                cache: _repository.RequestCache.DEFAULT
            };
            var url = this.getUrl() + "/articles?source=" + source + "&apiKey=" + user.getApiKey();
            return _repository.Repository.request(url, properties, _repository.ResponseType.JSON);
        }
    }]);
    return NewsApiRepositoryClass;
}(_repository.Repository);

var NewsApiRepository = exports.NewsApiRepository = new NewsApiRepositoryClass();