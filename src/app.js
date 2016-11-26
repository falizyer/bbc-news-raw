import "lodash";
import "babel-polyfill";
import "whatwg-fetch";
import "./app.style.scss";

document.addEventListener("DOMContentLoaded", () => {
    require([
            "core/web-element.abstract",
            "component/index-page/index-page"],
        (WebElementModule, IndexPageModule) => {
            const {WebElement} = WebElementModule;
            const {IndexPage} = IndexPageModule;
            IndexPage[WebElement.render]();
            IndexPage.instance.loadNews()
                .then(() => startUpdate());

            function startUpdate(delay = 1000 * 60 * 5) {
                setTimeout(() => IndexPage.instance.loadNews()
                    .then(() => startUpdate(delay)), delay);
            }
        });
});
