import { Action, Dispatch, Middleware } from "redux";
import { findQuestion, IQuestionStackItem, isFinal, QuestionId } from "../../core";
import { nextQuestionAction } from "../actions";
import { setCalculatorResultAction } from "../actions/calculator";
import { IApplicationState } from "../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

function isNextQuestionAction(action: Action): action is ReturnType<typeof nextQuestionAction> {
    return action.type === nextQuestionAction.type;
}

function findNumberResult(stack: IQuestionStackItem[], id: QuestionId): number {
    const result = stack.find(s => s.question.id === id)?.result;
    if(typeof(result) === "number") {
        return result;
    }
    return 0;
}

export const calculator: CalculatorMiddleware = (store) => (next) => (action: Action) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { stack } = store.getState().flow;
    
    if(isNextQuestionAction(action)) {
        const question = findQuestion(action.payload.id);
        if(question && isFinal(question)) {
            switch(question.id) {
                case "f3": 
                    next(setCalculatorResultAction(findNumberResult(stack, "s1") + 7));
                    break;
                
            }
        }
    }

    next(action);
};
