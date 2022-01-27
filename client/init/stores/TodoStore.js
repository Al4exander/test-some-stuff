// Core
import { makeObservable, action } from 'mobx';

class TodoStore {
    constructor(root) {
        this.root = root;
        this.todos = [];

        makeObservable(this, {
            hydrate: action,
        });
    }

    hydrate(data) {
        if (data) {
            this.todos = data;
        }
    }
}

export { TodoStore };
