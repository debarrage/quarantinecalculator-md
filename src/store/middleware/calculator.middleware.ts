import { Action, Dispatch, Middleware } from "redux";
import { isFinal } from "../../core";
import { Calculator } from "../../core/calculations/calculator";
import { Designation } from "../../core/calculations/designation";
import { nextQuestionAction } from "../actions";
import { setQuarantineDaysAction, setQuarantineDesignationAction } from "../actions/quarantine.actions";
import { IApplicationState } from "../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

/**
 * This middleware activates the calculator if the current question (after application of the current action to the store)
 * is final.
 * 
 * @param store redux store
 */
export const calculator: CalculatorMiddleware = (store) => (next) => (action: Action) => {
    
    // First apply the action to the store
    next(action);
    
    // If the action is a next question action and the current question is final,
    // then activate the 
    if(action.type === nextQuestionAction.type) {
        // Instantiate calculator if it is final
        const { current, path } = store.getState().flow;
        if(isFinal(current)) {      
            // Calculate the number of quarantine days      
            next(setQuarantineDaysAction(new Calculator(path).calculate(current)));
            
            // Get the designation
            const designation = new Designation(path).find(current);
            if(designation) {
                next(setQuarantineDesignationAction(designation.id));
            }
        }
    }
};
