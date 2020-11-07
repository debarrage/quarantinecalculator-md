import { createAction } from "@reduxjs/toolkit";
import { QuestionId } from "../../core";
import { createActionName } from "./helpers";

const actionGroup = "quarantine";
const actionName = createActionName(actionGroup);

export const setQuarantineDaysAction = createAction<number>(actionName("set"));
export const setQuarantineDesignationAction = createAction<QuestionId>(actionName("set designation"));
