import { Action, Dispatch, Middleware } from "redux";
import { findQuestion, isYesNoRelayQuestion } from "../../../core";
import { StackUtils } from "../../../core/calculations/util";
import { nextQuestionAction } from "../../actions";
import { IApplicationState } from "../../state";

type CalculatorMiddleware = Middleware<unknown, IApplicationState, Dispatch>;

function isNextQuestionAction(action: Action): action is ReturnType<typeof nextQuestionAction> {
    return action.type === nextQuestionAction.type;
}

export const relay: CalculatorMiddleware = (store) => (next) => (action: Action) => {    
    if(isNextQuestionAction(action)) {
        // Instantiate calculator if it is final
        const question = findQuestion(action.payload.id);
        if(question && isYesNoRelayQuestion(question)) {
            const { stack } = store.getState().flow;
            const utils = new StackUtils(stack);

            const yes = !!utils.find(question.yesCondition).result;
            const id = yes ? question.targets.yes : question.targets.no;

            next(nextQuestionAction({ id }));
        } else {
            next(action);
        }
    }
};
