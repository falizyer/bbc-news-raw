import {
    Repository,
    RequestMethod,
    ResponseType,
    RequestCache,
    RequestMode
} from "../core/repository.abstract";
import {readonly} from "../core/helpers";

export const NewsApiSource = {
    BBC_NEWS: "bbc-news"
};
readonly(NewsApiSource);

class NewsApiRepositoryClass extends Repository {

    constructor() {
        super("https://newsapi.org/v1");
    }

    getArticles(user, source) {
        const properties = {
            method: RequestMethod.GET,
            headers: this.getHeaders(),
            mode: RequestMode.CORS,
            cache: RequestCache.DEFAULT
        };
        const url = `${this.getUrl()}/articles?source=${source}&apiKey=${user.getApiKey()}`;
        return Repository.request(url, properties, ResponseType.JSON);
    }
}

export const NewsApiRepository = new NewsApiRepositoryClass();
