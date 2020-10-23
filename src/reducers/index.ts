import { combineReducers } from "redux";
import { IApplicationState } from "../store/state";
import { init } from "./init";

export const rootReducer = combineReducers<IApplicationState>({
    init,
});
