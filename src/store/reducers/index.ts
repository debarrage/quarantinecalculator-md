import { combineReducers } from "redux";
import { IApplicationState } from "../state";
import { flow } from "./flow";
import { init } from "./init";

export const rootReducer = combineReducers<IApplicationState>({
    init,
    flow,
});
