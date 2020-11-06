import { Action, Dispatch, Middleware } from "redux";
import { findNextQuestionId, findQuestion, isYesNoRelayQuestion } from "../../../core";
import { pathUtils } from "../../../core/calculations/utils";
import { isNextQuestionAction, nextQuestionAction } from "../../actions";
import { IApplicationState } from "../../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

export const relay: CalculatorMiddleware = (store) => (next) => (action: Action) => {    
    if(isNextQuestionAction(action)) {
        // Instantiate calculator if it is final
        const current = store.getState().flow.current;
        const question = findQuestion(findNextQuestionId(current, action.payload.result));
        
        // Post the next action
        next(action);

        // If it is a relay action, relay it.
        if(isYesNoRelayQuestion(question)) {
            const { path } = store.getState().flow;
            const result = !!pathUtils(path).getYesNoResult(question.yesCondition);
            next(nextQuestionAction({ result }));
        } 
    } else {
        next(action);
    }   
};
