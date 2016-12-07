import {WebElement} from "core/web-element.abstract";
import {ArticleList} from "shared/article-list/article-list";
import indexPageTpl from "./index-page.tpl.html";
import "./index-page.style.scss";

export class IndexPage extends WebElement {

    static [WebElement.render]() {
        IndexPage.instance[WebElement.render]();
    }

    static [WebElement.update](state) {
        IndexPage.instance[WebElement.update](state);
    }

    static get instance() {
        return this._instance === void 0
            ? this._instance = new IndexPage(document.querySelector("html"))
            : this._instance;
    }

    constructor(parent) {
        super(parent, {
            locator: "[index-page]"
        });
        this.articleList = new ArticleList(this.getElement());
    }

    [WebElement.render]() {
        this.setElementHTML(indexPageTpl);
        this.articleList[WebElement.render]();
    }

    [WebElement.update](state) {
        const {articles} = state;
        this.articleList[WebElement.update](articles);
    }
}
