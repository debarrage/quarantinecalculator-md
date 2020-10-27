import { createAction } from "@reduxjs/toolkit";
import { createActionName } from "./util";

const actionGroup = "calculator";
const actionName = createActionName(actionGroup);

export const setCalculatorResultAction = createAction<number>(actionName("set"));
