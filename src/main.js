import "babel-polyfill";
import "whatwg-fetch";
import {elementFinder} from "./core/element-finder.class";

document.addEventListener("DOMContentLoaded", () => {
    let button = elementFinder("#button").first();
    let handler = () => {
        require([
                "core/web-element.abstract",
                "component/index-page/index-page",
                "./main.style.scss"],
            (WebElementModule, IndexPageModule) => {
                document.querySelector("[index-page]").removeChild(button);

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
    };
    button.addEventListener("click", handler);
});
