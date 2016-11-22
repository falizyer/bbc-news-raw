"use strict";
import {WebElement} from "~/core/web-element.abstract";
import fadingSpinnerTpl from "~/shared/fading-spinner/fading-spinner.tpl.html";
import articleTpl from "./article-list.tpl.html";

export class ArticleList extends WebElement {

    constructor(parent) {
        super(parent, {
            locator: "[article-list]"
        });
        this.articles = [];
    }

    showSpinner(isVisible = true) {
        if (isVisible === true) {
            let element = this.getElement();
            let spinner = element.querySelectorAll(".sk-fading-circle");
            if (spinner.length < 1) {
                let li = document.createElement("li");
                li.classList.add("spinner-container");
                li.innerHTML = fadingSpinnerTpl;
                element.appendChild(li);
            }
            return;
        }
        let element = this.parent.querySelector(this.locator);
        element.removeChild(element.querySelector("li.spinner-container"));
    }

    [WebElement.render]() {
        let articlesTpl = this.getArticlesTpl(this.articles);
        this.setElementHTML([...articlesTpl].join(""));
    }

    [WebElement.update](_articles) {
        let articles = _.uniqBy(_articles, "url");
        let clearList = _.intersectionBy(this.articles, articles, "url");
        let element = this.getElement();
        for (let clearElement of clearList) {
            const {url} = clearElement;
            element.removeChild(element.querySelector(`[href="${url}"]`).parentNode);
        }
        this.articles = _.uniqBy([...articles, ...this.articles], "url");
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
            let date = new Date(publishedAt);
            yield articleTpl
                .replace(/(\$\{url\})/g, url)
                .replace(/(\$\{description\})/g, description)
                .replace(/(\$\{author\})/g, author)
                .replace(/(\$\{publishedAt\})/g, `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`)
                .replace(/(\$\{urlToImage\})/g, urlToImage);
        }
    }
}
