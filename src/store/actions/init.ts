import { createAction } from "@reduxjs/toolkit";

enum Actions {
    INIT = "[Application] INIT",
    INIT_DONE = "[Application] INIT_DONE",
}

export const initAction = createAction(Actions.INIT);
export const initDoneAction = createAction(Actions.INIT_DONE);
