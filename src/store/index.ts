import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import { rootReducer } from "./reducers";
import { calculator } from "./reducers/middleware/calculator";
import { haptics } from "./reducers/middleware/haptics";
import { relay } from "./reducers/middleware/relay";

// Declare global type for the redux devtools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(enhancers?: StoreEnhancer) => R; // Used one of the composer base types...
    }
}

export const initStore = () => {
    return createStore(
        rootReducer,
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(applyMiddleware(haptics, relay, calculator))
    );
};
