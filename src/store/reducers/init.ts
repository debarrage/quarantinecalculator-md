import { createReducer } from "@reduxjs/toolkit";
import { initDoneAction } from "../actions";


export interface IInitState {
    initialized: boolean;
}

const INITIAL_STATE: IInitState = {
    initialized: false,
}

export const init = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(initDoneAction, () => ({ initialized: true }));
});
