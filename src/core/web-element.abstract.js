"use strict";

export class WebElement {

    static get render() {
        return Symbol.for("render");
    }

    static get update() {
        return Symbol.for("update");
    }

    constructor(parent, settings) {
        this.parent = parent;
        const {
            locator
        } = settings;
        this.locator = locator;
    }

    getElement() {
        return this.parent.querySelector(this.locator);
    }

    setElementHTML(html) {
        let element = this.getElement();
        element.innerHTML = html;
    }

    [WebElement.render]() {

    }

    [WebElement.update]() {

    }
}
