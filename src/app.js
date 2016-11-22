"use strict";
import {WebElement} from "~/core/web-element.abstract";
import {IndexPage} from "~/component/index-page/index-page";

IndexPage[WebElement.render]();
IndexPage.instnce.loadNews()
    .then(() => startUpdate());

function startUpdate(delay = 1000 * 60 * 5) {
    setTimeout(() => IndexPage.instnce.loadNews()
        .then(() => startUpdate(delay)), delay);
}
