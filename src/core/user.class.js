"use strict";

export class User {

    constructor(userId, apiKey) {
        this.userId = userId;
        this.apiKey = apiKey;
    }

    getUserId() {
        return this.userId;
    }

    getApiKey() {
        return this.apiKey;
    }
}
