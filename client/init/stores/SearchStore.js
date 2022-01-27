// Core
import { makeObservable, observable, action } from 'mobx';

class SearchStore {
    constructor(root) {
        this.root = root;
        this.items = [];

        makeObservable(this, {
            items:   observable,
            hydrate: action,
        });
    }

    hydrate(data) {
        if (data) {
            this.items = data;
        }
    }
}

export { SearchStore };
