import { createAction } from "@reduxjs/toolkit";
import { QuestionId } from "../../core";
import { createActionName } from "./util";

const actionGroup = "calculator";
const actionName = createActionName(actionGroup);

export const setCalculatorResultAction = createAction<number>(actionName("set"));
export const setQuarantineDesignationAction = createAction<QuestionId>(actionName("set designation"));
