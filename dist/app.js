define(["./core/web-element.abstract", "./component/index-page/index-page"], function (_webElement, _indexPage) {
    "use strict";

    _indexPage.IndexPage[_webElement.WebElement.render]();
    _indexPage.IndexPage.instnce.loadNews().then(function () {
        return startUpdate();
    });

    function startUpdate() {
        var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000 * 1 * 5;

        setTimeout(function () {
            return _indexPage.IndexPage.instnce.loadNews().then(function () {
                return startUpdate(delay);
            });
        }, delay);
    }
});