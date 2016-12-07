import "babel-polyfill";
import "whatwg-fetch";
import {elementFinder} from "core/element-finder.class";
import {PageStore} from "store/page.store";
import {PageConstant} from "constant/page.constant";
import {NewsApiRepository, NewsApiSource} from "repository/news-api.repository";
import {Dispatcher} from "flux";

export const pageDispatcher = new Dispatcher();
export const pageStore = new PageStore(pageDispatcher);

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
                pageStore.addListener(() => {
                    IndexPage[WebElement.update](pageStore.getState());
                });

                loadNews();
                startUpdate();

                function startUpdate(delay = 1000 * 60 * 5) {
                    setTimeout(() => loadNews()
                        .then(() => startUpdate(delay)), delay);
                }

                function loadNews() {
                    return NewsApiRepository.getArticles({
                        getApiKey() {
                            return "cbf7163e029d46be9533f928a0c9228f";
                        }
                    }, NewsApiSource.BBC_NEWS)
                        .then(response => {
                            const {articles} = response;
                            pageDispatcher.dispatch({
                                type: PageConstant.RECEIVE_NEWS_ACTION,
                                articles
                            });
                        });
                }
            });
    };
    button.addEventListener("click", handler);
});
