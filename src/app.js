import "babel-polyfill";
import "whatwg-fetch";
import {WebElement} from "./core/web-element.abstract";
import {IndexPage} from "./component/index-page/index-page";

IndexPage[WebElement.render]();
IndexPage.instance.loadNews()
    .then(() => startUpdate());

function startUpdate(delay = 1000 * 60 * 5) {
    setTimeout(() => IndexPage.instance.loadNews()
        .then(() => startUpdate(delay)), delay);
}
