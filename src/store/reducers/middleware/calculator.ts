import { Action, Dispatch, Middleware } from "redux";
import { isFinal } from "../../../core";
import { Calculator } from "../../../core/calculations/calculator";
import { Designation } from "../../../core/calculations/designation";
import { nextQuestionAction } from "../../actions";
import { setCalculatorResultAction, setQuarantineDesignationAction } from "../../actions/calculator";
import { IApplicationState } from "../../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

function isNextQuestionAction(action: Action): action is ReturnType<typeof nextQuestionAction> {
    return action.type === nextQuestionAction.type;
}

export const calculator: CalculatorMiddleware = (store) => (next) => (action: Action) => {
    
    next(action);
    
    if(isNextQuestionAction(action)) {
        // Instantiate calculator if it is final
        const question = store.getState().flow.current;
        if(isFinal(question)) {
            const { path } = store.getState().flow;
            const calculator = new Calculator(path);
            
            next(setCalculatorResultAction(calculator.calculate(question)));
            
            const designation = new Designation(path).find(question);
            if(designation) {
                next(setQuarantineDesignationAction(designation.id));
            }
        }
    }
};
