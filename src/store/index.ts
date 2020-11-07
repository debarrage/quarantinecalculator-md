import { applyMiddleware, compose, createStore, StoreEnhancer } from "redux";
import { calculator, haptics, relay } from "./middleware";
import { rootReducer } from "./reducers";

// Declare global type for the redux devtools
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: <R>(enhancers?: StoreEnhancer) => R; // Used one of the composer base types...
    }
}

// Define the middleware, order is important
const middleware = applyMiddleware(
    haptics, 
    relay, 
    calculator
);

// Create an init store method
export const initStore = () => {
    return createStore(
        rootReducer,
        (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)(middleware)
    );
};
