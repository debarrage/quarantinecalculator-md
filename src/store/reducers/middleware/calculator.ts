import { Action, Dispatch, Middleware } from "redux";
import { findQuestion, isFinal } from "../../../core";
import { Calculator } from "../../../core/calculator";
import { Designation } from "../../../core/designation";
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
        const question = findQuestion(action.payload.id);
        if(question && isFinal(question)) {
            const { stack } = store.getState().flow;
            const calculator = new Calculator(stack);
            
            next(setCalculatorResultAction(calculator.calculate(question)));
            
            const designation = new Designation(stack).find(question);
            if(designation) {
                next(setQuarantineDesignationAction(designation.id));
            }
        }
    }
};
