define(["exports", "../core/repository.abstract", "../core/helpers"], function (exports, _repository, _helpers) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.NewsApiRepository = exports.NewsApiSource = undefined;

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

    var NewsApiSource = exports.NewsApiSource = {
        BBC_NEWS: "bbc-news"
    };
    (0, _helpers.readonly)(NewsApiSource);

    var NewsApiRepositoryClass = function (_Repository) {
        _inherits(NewsApiRepositoryClass, _Repository);

        function NewsApiRepositoryClass() {
            _classCallCheck(this, NewsApiRepositoryClass);

            return _possibleConstructorReturn(this, (NewsApiRepositoryClass.__proto__ || Object.getPrototypeOf(NewsApiRepositoryClass)).call(this, "https://newsapi.org/v1"));
        }

        _createClass(NewsApiRepositoryClass, [{
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
});