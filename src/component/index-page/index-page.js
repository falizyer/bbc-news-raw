"use strict";
import {NewsApiRepository, NewsApiSource} from "../../repository/news-api.repository";
import {ArticleList} from "../../shared/article-list/article-list";
import {User} from "../../core/user.class";

export class IndexPage {

    constructor() {
        let user = new User("falizyer", "");
        NewsApiRepository.getArticles(user, NewsApiSource.BBC_NEWS);
    }

    [Symbol.for("render")]() {
        
    }
}
