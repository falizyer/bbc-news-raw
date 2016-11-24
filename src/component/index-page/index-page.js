import "./index-page.style.scss";
import indexPageTpl from "./index-page.tpl.html";
import {WebElement} from "../../core/web-element.abstract";
import {NewsApiRepository, NewsApiSource} from "../../repository/news-api.repository";
import {ArticleList} from "../../shared/article-list/article-list";

export class IndexPage extends WebElement {

    static [WebElement.render]() {
        IndexPage.instance[WebElement.render]();
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
        this.user = {
            getApiKey() {
                return "cbf7163e029d46be9533f928a0c9228f";
            }
        };
    }

    loadNews() {
        this.articleList.showSpinner();
        return NewsApiRepository.getArticles(this.user, NewsApiSource.BBC_NEWS)
            .then(response => {
                const {articles} = response;
                this.articleList[WebElement.update](articles);
                this.articleList.showSpinner(false);
            });
    }

    [WebElement.render]() {
        this.setElementHTML(indexPageTpl);
        this.articleList[WebElement.render]();
    }
}
