"use strict";
import fadingSpinnerTpl from "~/shared/fading-spinner/fading-spinner.html";
import {uniqBy, intersectionBy} from "lodash";
import articleTpl from "./article-list.tpl.html";

export class ArticleList {

    constructor(parent) {
        this.parent = parent;
        this.locator = "[article-list]";
        this.articles = [];
    }

    showSpinner(isVisible = true) {
        if (isVisible === true) {
            let element = this.parent.querySelector(this.locator);
            let spinner = element.querySelectorAll(".sk-fading-circle");
            if (spinner.length < 1) {
                let li = document.createElement("li");
                li.classList.add("spinner-container");
                li.innerHTML = fadingSpinnerTpl;
                element.insertBefore(li, element.querySelector("li"));
            }
            return;
        }
        let element = this.parent.querySelector(this.locator);
        element.removeChild(element.querySelector("li.spinner-container"));
    }

    [Symbol.for("render")]() {
        let element = this.parent.querySelector(this.locator);
        let articlesTpl = this.getArticlesTpl(this.articles);
        element.innerHTML = [...articlesTpl].join("");
    }

    [Symbol.for("update")](_articles) {
        let articles = uniqBy(_articles, "url");
        let clearList = intersectionBy(this.articles, articles, "url");
        let element = this.parent.querySelector(this.locator);
        for (let clearElement of clearList) {
            element.removeChild(element.querySelector(`[href="${clearElement.url}"]`).parentNode);
        }
        this.articles = uniqBy([...articles, ...this.articles], "url");
        let articlesTpl = this.getArticlesTpl(articles);
        for (let articleTpl of articlesTpl) {
            let li = document.createElement("li");
            li.classList.add("article-item");
            li.innerHTML = articleTpl;
            element.insertBefore(li, element.firstChild);
        }
    }

    *getArticlesTpl(articles = this.articles) {
        for (let article of articles) {
            let {
                url,
                description,
                author,
                publishedAt,
                urlToImage
            } = article;
            yield articleTpl
                .replace(/(\$\{url\})/g, url)
                .replace(/(\$\{description\})/g, description)
                .replace(/(\$\{author\})/g, author)
                .replace(/(\$\{publishedAt\})/g, publishedAt)
                .replace(/(\$\{urlToImage\})/g, urlToImage);
        }
    }
}
