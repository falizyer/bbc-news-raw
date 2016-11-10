"use strict";

class BBCNewsRepositoryClass {

    constructor() {
        this.url = "https://newsapi.org/v1";
        this.source = "bbc-news";
    }

    getArticlesMeta(apiKey) {
        let headers = new Headers();
        let myInit = {
            method: "GET",
            headers: headers,
            mode: "cors",
            cache: "default"
        };
        let response = new Request(`${this.url}/articles?source=${this.source}&apiKey=${apiKey}`, myInit);
        return fetch(response)
            .then(response => response.json());
    }
}

export let BBCNewsRepository = new BBCNewsRepositoryClass();
