import { createAction } from "@reduxjs/toolkit";
import { Question } from "../../core/domain";
import { createActionName } from "./util";

const actionGroup = "flow";
const actionName = createActionName(actionGroup);

export const nextQuestionAction = createAction<Question>(actionName("next"));
export const previousQuestionAction = createAction(actionName("previous"));
export const resetAction = createAction(actionName("reset"));
