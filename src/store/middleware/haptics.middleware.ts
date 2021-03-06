import { Action, Dispatch, Middleware } from "redux";
import { vibrate } from "../../core/haptics";
import { nextQuestionAction, previousQuestionAction } from "../actions";
import { IApplicationState } from "../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

/**
 * Middleware to activate haptics upon going to a next or previous question
 */
export const haptics: CalculatorMiddleware = () => (next) => (action: Action) => {
    
    const { type } = action;

    if(type === nextQuestionAction.type || type === previousQuestionAction.type) {
        vibrate();
    }
    
    next(action);
};
