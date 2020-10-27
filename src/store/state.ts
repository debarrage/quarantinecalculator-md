import { IFlowState } from "./reducers/flow";
import { IInitState } from "./reducers/init";
import { IQuarantineState } from "./reducers/quarantine";

/**
 * Main application state. All substates are defined as types with the 
 * reducers. @see ./reducers
 */
export interface IApplicationState {
    init: IInitState,
    flow: IFlowState,
    quarantine: IQuarantineState,
}
