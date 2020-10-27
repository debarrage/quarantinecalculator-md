import { createReducer } from "@reduxjs/toolkit";
import { getInitialQuestion, questions } from "../../core";
import { IQuestion, IQuestionStackItem } from "../../core/domain";
import { nextQuestionAction, previousQuestionAction, resetAction } from "../actions";

export interface IFlowState {
    current?: IQuestion;
    stack: Array<IQuestionStackItem>;
}

const INITIAL_STATE: IFlowState = {
    current: getInitialQuestion(),
    stack: [],
}

export const flow = createReducer(INITIAL_STATE, (builder) => {
    builder.addCase(resetAction, () => INITIAL_STATE);
    builder.addCase(nextQuestionAction, (state, action) => {

        const { id, result } = action.payload;
        const { current } = state;

        if(current) {

            const nextQuestion = questions.find(q => q.id === id);

            return {
                current: nextQuestion,
                stack: [...state.stack, {
                    type: current.type,
                    result,
                    question: current,
                }],
            }
        }
        return state;
    });
    builder.addCase(previousQuestionAction, (state) => {
        const { stack } = state;
        const previous = stack.slice(-1)[0];
        if(previous) {
            return {
                current: previous.question,
                stack: stack.slice(0,-1),
            }
        }
        return state;
    })
});
