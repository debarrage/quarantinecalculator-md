import { Action, createAction } from "@reduxjs/toolkit";
import { QuestionResultTypes } from "../../core/domain";
import { createActionName } from "./helpers";

const actionGroup = "flow";
const actionName = createActionName(actionGroup);

export const nextQuestionAction = createAction<{ result?: QuestionResultTypes }>(actionName("next"));
export const previousQuestionAction = createAction(actionName("previous"));
export const resetAction = createAction(actionName("reset"));

export function isNextQuestionAction(action: Action): action is ReturnType<typeof nextQuestionAction> {
    return action.type === nextQuestionAction.type;
}
