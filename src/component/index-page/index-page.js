"use strict";
import {NewsApiRepository, NewsApiSource} from "../../repository/news-api.repository";
import {ArticleList} from "~/shared/article-list/article-list";
import indexPageTpl from "./index-page.tpl.html";

export class IndexPage {

    static [Symbol.for("render")]() {
        IndexPage.instnce[Symbol.for("render")]();
    }

    static get instnce() {
        return this._instance === void 0
            ? this._instance = new IndexPage(document.querySelector("html"))
            : this._instance;
    }

    constructor(parent) {
        this.element = parent.querySelector("body");
        this._instance = void 0;
        this.articleList = new ArticleList(this.element);
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
                this.articleList[Symbol.for("update")](articles);
                this.articleList.showSpinner(false);
            });
    }

    [Symbol.for("render")]() {
        this.element.innerHTML = indexPageTpl;
        this.articleList[Symbol.for("render")]();
    }
}
