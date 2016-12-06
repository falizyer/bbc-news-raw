export class ElementFinderIterator {

    constructor(items = []) {
        this.index = 0;
        this.items = items;
    }

    first() {
        this.reset();
        return this.next();
    }

    next() {
        return this.items[this.index++];
    }

    hasNext() {
        return this.index <= this.items.length;
    }

    reset() {
        this.index = 0;
    }

    each(callback) {
        for (let item = this.first(); this.hasNext(); item = this.next()) {
            callback(item);
        }
    }
}


export function elementFinder(selector, parent = document.body) {
    return new ElementFinderIterator(parent.querySelectorAll(selector));
}
