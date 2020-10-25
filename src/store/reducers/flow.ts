import { createReducer } from "@reduxjs/toolkit";
import { Question } from "../../core/domain";
import { nextQuestionAction, previousQuestionAction, resetAction } from "../actions";

export interface IFlowState {
    current?: Question;
    stack: Array<Question>;
}

const INITIAL_STATE: IFlowState = {
    stack: [],
}

export const flow = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(resetAction, () => INITIAL_STATE);
    builder.addCase(nextQuestionAction, (state, action) => {
        if(state.current) {
            return {
                current: action.payload,
                stack: [...state.stack, state.current]
            }
        }

        return {
            current: action.payload,
            ...state
        };
    });
    builder.addCase(previousQuestionAction, (state, _) => {
        if(state.stack.length > 0) {
            const current = state.stack.pop();
            return {
                current,
                stack: [...state.stack],
            }
        }

        return state;
    })
});
