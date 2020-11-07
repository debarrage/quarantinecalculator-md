import { createReducer } from "@reduxjs/toolkit";
import { QuestionId } from "../../core";
import { resetAction } from "../actions";
import { setQuarantineDaysAction, setQuarantineDesignationAction } from "../actions/quarantine.actions";


export interface IQuarantineState {
    days: number;
    designation?: QuestionId;
}

const INITIAL_STATE: IQuarantineState = {
    days: -1,
}

export const quarantine = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(setQuarantineDaysAction,
        (state, action) => ({ ...state, days: action.payload }));
    
    builder.addCase(setQuarantineDesignationAction,
        (state, action) => ({ ...state, designation: action.payload }));
    
    builder.addCase(resetAction,
        () => INITIAL_STATE);
});
