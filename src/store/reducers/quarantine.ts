import { createReducer } from "@reduxjs/toolkit";
import { resetAction } from "../actions";
import { setCalculatorResultAction, setQuarantineDesignationAction } from "../actions/calculator";


export interface IQuarantineState {
    days: number;
    designation?: string;
}

const INITIAL_STATE: IQuarantineState = {
    days: -1,
}

export const quarantine = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(setCalculatorResultAction,
        (state, action) => ({ ...state, days: action.payload }));
    
    builder.addCase(setQuarantineDesignationAction,
        (state, action) => ({ ...state, designation: action.payload }));
    
    builder.addCase(resetAction,
        () => INITIAL_STATE);
});
