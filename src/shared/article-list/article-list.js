"use strict";

export class ArticleList {

    static getArticleTpl(article) {

    }

    constructor() {
        this.articleList = [];
    }

    *[Symbol.iterator]() {
        for (let article of this.articleList) {
            yield ArticleList.getArticleTpl(article);
        }
    }
}
