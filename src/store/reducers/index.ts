import { combineReducers } from "redux";
import { IApplicationState } from "../state";
import { flow } from "./flow";
import { init } from "./init";
import { quarantine } from "./quarantine";

export const rootReducer = combineReducers<IApplicationState>({
    init,
    flow,
    quarantine,
});
