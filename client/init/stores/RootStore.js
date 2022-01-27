// eslint-disable-next-line import/no-cycle
import { UIStore } from './UIStore';
import { TodoStore } from './TodoStore';
import { SearchStore } from './SearchStore';

export class RootStore {
    constructor() {
        this.uiStore = new UIStore(this);
        this.todoStore = new TodoStore(this);
        this.searchStore = new SearchStore(this);
    }

    hydrate(data) {
        if (data.uiStore) {
            this.uiStore.hydrate(data.uiStore);
        }
        if (data.todoStore) {
            this.todoStore.hydrate(data.todoStore);
        }
        if (data.searchStore) {
            this.searchStore.hydrate(data.searchStore);
        }
    }
}
