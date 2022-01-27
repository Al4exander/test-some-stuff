// Core
import { makeObservable, observable, action } from 'mobx';

class UIStore {
    constructor(root) {
        this.root = root;
        this.isFetching = false;

        makeObservable(this, {
            isFetching: observable,
            hydrate:    action,
        });
    }

    hydrate(data) {
        if (data) {
            this.isFetching = data.isFetching;
        }
    }
}

export { UIStore };
