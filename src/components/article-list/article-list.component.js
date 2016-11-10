"use strict";
import {BBCNewsRepository} from "../../services/bbc-news.repository";

export class IndexComponent {
    constructor() {
        let container = document.getElementsByClassName("article-list").item(0);
        BBCNewsRepository.getArticlesMeta("cbf7163e029d46be9533f928a0c9228f")
            .then(result => {
                const {articles} = result;
                let tpl = [];
                for (let meta of articles) {
                    const {
                        author,
                        description,
                        publishedAt,
                        title,
                        url,
                        urlToImage
                    } = meta;
                    tpl.push(
                        `<li class="article"><article>` +
                        `<figure class="image-container"><img src="${urlToImage}" /></figure>` +
                        `<header></header>` +
                        `<div class="content">${description}</div>` +
                        `<footer>` +
                        `<abbr class="author" title="${author}">${author}</abbr>` +
                        `<abbr class="published" title="${publishedAt}">${publishedAt}</abbr>` +
                        `</footer>` +
                        `</article></li>`);
                }

                container.innerHTML = tpl.join("\n");
            });
    }
}
