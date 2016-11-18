"use strict";
import {readonly} from "./helpers";

export const RequestMethod = {
    GET: "GET"
};
readonly(RequestMethod);

export const RequestMode = {
    CORS: "cors",
    NAVIGATE: "navigate",
    NO_CORS: "no-cors",
    SAME_ORIGIN: "same-origin"
};
readonly(RequestMode);

export const RequestCache = {
    DEFAULT: "default",
    NO_CACHE: "no-cache"
};
readonly(RequestCache);

export const ResponseType = {
    JSON: "json",
    TEXT: "text"
};
readonly(RequestCache);

export class Repository {

    static fetch(response, type) {
        const fetched = fetch(response);
        switch (type) {
            case ResponseType.TEXT:
                return fetched.then(response => response.text());
            case ResponseType.JSON:
                return fetched.then(response => response.json());
            default:
                throw new Error("unknown response type");
        }
    }

    static request(url, properties, type) {
        const response = Request(url, properties);
        return this.fetch(response, type);
    }

    constructor(url, headers = new Headers()) {
        this.url = url;
        this.headers = headers;
    }

    getUrl() {
        return this.url;
    }

    getHeaders() {
        return this.headers;
    }
}
