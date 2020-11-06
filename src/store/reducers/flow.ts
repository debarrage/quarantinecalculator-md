import { createReducer } from "@reduxjs/toolkit";
import { findInitialQuestion, findNextQuestionId, findQuestion } from "../../core";
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
    builder.addCase(resetAction, () => INITIAL_STATE);
    builder.addCase(nextQuestionAction, (state, action) => {

        const { result } = action.payload;
        const { current } = state;

        const nextQuestion = findQuestion(findNextQuestionId(current, result));

        return {
            current: nextQuestion,
            path: [...state.path, {
                type: current.type,
                result,
                question: current,
            }],
        }

    });
    builder.addCase(previousQuestionAction, (state) => {
        const { path } = state;
        const previous = path.slice(-1)[0];
        if(previous) {
            return {
                current: previous.question,
                path: path.slice(0,-1),
            }        }
        return state;
    })
});
