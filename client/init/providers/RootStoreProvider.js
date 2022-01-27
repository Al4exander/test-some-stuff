// Core
import { enableStaticRendering } from 'mobx-react-lite';
import React, { createContext, ReactNode, useContext } from 'react';

// Stores
import { RootStore } from '../stores/RootStore';

enableStaticRendering(typeof window === 'undefined');

let store;
const StoreContext = createContext(undefined);
StoreContext.displayName = 'StoreContext';

const initializeStore = (initialData) => {
    const _store = store ?? new RootStore();

    if (initialData) {
        _store.hydrate(initialData);
    }

    // Для SSG и SSR всегда создавать новое хранилище
    if (typeof window === 'undefined') {
        return _store;
    }

    // Создавать хранилище для клиента
    if (!store) {
        store = _store;
    }

    return _store;
};

export const useRootStore = () => {
    const context = useContext(StoreContext);

    if (context === undefined) {
        throw new Error('useRootStore must be used within RootStoreProvider');
    }

    return context;
};

export function RootStoreProvider({
    children,
    hydrationData,
}) {
    const initializedStore = initializeStore(hydrationData);

    return (
        <StoreContext.Provider value = { initializedStore }>
            { children }
        </StoreContext.Provider>
    );
}
