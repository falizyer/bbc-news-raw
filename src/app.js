"use strict";

class Repository {

    constructor(url) {
        this.url = url;
        this.headers = new Headers();
    }

    getUrl() {
        return this.url;
    }

    getHeaders() {
        return this.headers;
    }
}

const NewsApiSources = {
    SOURCE_BBC_NEWS: 0
};

class NewsApiRepository extends Repository {

    static getSourceName(source) {
        switch (source) {
            case NewsApiSources.SOURCE_BBC_NEWS:
                return "bbc-news";
            default:
                throw Error("Unknown source")
        }
    }

    constructor() {
        super("https://newsapi.org/v1");
    }

    getArticles(source, apiKey) {
        let properties = {
            method: "GET",
            headers: this.getHeaders(),
            mode: "cors",
            cache: "default"
        };
        let response = new Request(`${this.getUrl()}/articles?source=${source}&apiKey=${apiKey}`, properties);
        return fetch(response)
            .then(response => response.json());
    }
}

class ArticleList {
    constructor(fetchedData) {
        this.articles = fetchedData.articles;
        this.title = "BBC News";
    }

    getTitle() {
        return this.title;
    }

    *[Symbol.iterator]() {
        for (let article of this.articles) {
            const {
                author,
                description,
                publishedAt,
                title,
                url,
                urlToImage
            } = article;
            let header = [
                `<header class="header"><h3>${description}</h3></header>`
            ];
            let footer = [
                `<footer class="footer">`,
                `<abbr class="author" title="${author}">Author: ${author}</abbr>`,
                `<abbr class="published" title="${publishedAt}">Published: ${publishedAt}</abbr>`,
                `</footer>`
            ];
            let tpl = [
                `<li class="article-item">`,
                `<a class="link" href="${url}">`,
                `<article class="article">`,
                ...header,
                ...footer,
                `<figure class="article-wrap"><img class="image" src="${urlToImage}" title="${description}" /></figure>`,
                `</article>`,
                `</a>`,
                `</li>`
            ];
            yield  tpl.join("\n");
        }
    }
}
const user = "falizyer";
const keyStore = new Map();
keyStore.set(user, "cbf7163e029d46be9533f928a0c9228f");
const repo = new NewsApiRepository();

document.addEventListener("DOMContentLoaded", () => {
    let apiKey = keyStore.get(user);
    let sourceName = NewsApiRepository.getSourceName(NewsApiSources.SOURCE_BBC_NEWS);
    let articleListElement = document.getElementsByClassName("article-list").item(0);
    let articleTitleElement = document.getElementsByClassName("title").item(0);
    repo.getArticles(sourceName, apiKey)
        .then(fetchedData => new ArticleList(fetchedData))
        .then(articleList => {
            articleTitleElement.innerHTML = `<span class="title-text">${articleList.getTitle()}</span>`;
            articleListElement.innerHTML = [...articleList].join("\n");
        })
        .catch(err => {
            console.log(err);
        });
});
