import { Action, Dispatch, Middleware } from "redux";
import { findNextQuestion, isRelayQuestion } from "../../core";
import { pathUtils } from "../../core/calculations/utils";
import { isNextQuestionAction, nextQuestionAction } from "../actions";
import { IApplicationState } from "../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

/**
 * Middleware to perform the automatic relay of questions.
 * 
 * @param store redux store
 */
export const relay: CalculatorMiddleware = (store) => (next) => (action: Action) => {    
    // Check if it is a next question action
    if(isNextQuestionAction(action)) {
        // Get the current question before application of the action, this is the referrer.
        const { current: referrer } = store.getState().flow;

        // This will be the next current question after application of the action...
        const question = findNextQuestion(referrer, action.payload.result);
        
        // Which we will do here
        next(action);

        // If it is a relay action, relay it. Which is an extra nextQuestionAction
        if(isRelayQuestion(question)) {
            const { path } = store.getState().flow;
            const result = !!pathUtils(path).getYesNoResult(question.yesCondition);
            next(nextQuestionAction({ result }));
        } 
    } else {
        next(action);
    }   
};
