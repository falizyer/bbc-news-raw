"use strict";
require("babel-polyfill");
import "whatwg-fetch";
import {IndexPage} from "~/component/index-page/index-page";
document.addEventListener("DOMContentLoaded", () => {
    IndexPage[Symbol.for("render")]();
    IndexPage.instnce.loadNews()
        .then(() => startUpdate());

    function startUpdate(delay = 30000) {
        setTimeout(() => IndexPage.instnce.loadNews()
            .then(() => startUpdate(delay)), delay);
    }
});
