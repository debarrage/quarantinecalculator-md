import { createAction } from "@reduxjs/toolkit";
import { createActionName } from "./util";

const actionGroup = "application";
const actionName = createActionName(actionGroup);

export const initAction = createAction(actionName("init"));
export const initDoneAction = createAction(actionName("init done"));
