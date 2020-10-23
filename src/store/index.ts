import { compose, createStore, StoreEnhancer } from "redux";
import { rootReducer } from "./reducers";

// Declare global type for the redux devtools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(enhancers?: StoreEnhancer) => R; // Used one of the composer base types...
    }
}

// Central store
export const store = createStore(
    rootReducer,
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)()
);
