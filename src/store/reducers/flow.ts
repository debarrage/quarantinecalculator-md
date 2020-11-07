import { createReducer } from "@reduxjs/toolkit";
import { findInitialQuestion, findNextQuestion } from "../../core";
import { IQuestion, QuestionResult } from "../../core/domain";
import { nextQuestionAction, previousQuestionAction, resetAction } from "../actions";

export interface IFlowState {
    current: IQuestion;
    path: Array<QuestionResult>;
}

const INITIAL_STATE: IFlowState = {
    current: findInitialQuestion(),
    path: [],
}

export const flow = createReducer(INITIAL_STATE, (builder) => {
    // Get the net question from the current state and result
    builder.addCase(nextQuestionAction, (state, action) => {
        
        const { result } = action.payload;
        const { current } = state;
        
        const nextQuestion = findNextQuestion(current, result);
        
        return {
            current: nextQuestion,
            path: [...state.path, {
                type: current.type,
                value: result,
                question: current,
            }],
        }
        
    });

    // Get the previous question from the stack
    builder.addCase(previousQuestionAction, (state) => {
        const { path } = state;
        const previous = path.slice(-1)[0];
        if(previous) {
            return {
                current: previous.question,
                path: path.slice(0,-1),
            }        }
        return state;
    });

    // Reset the path
    builder.addCase(resetAction, () => INITIAL_STATE);
});
