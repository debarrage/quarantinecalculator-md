import { combineReducers } from "redux";
import { IApplicationState } from "../state";
import { init } from "./init";

export const rootReducer = combineReducers<IApplicationState>({
    init,
});
