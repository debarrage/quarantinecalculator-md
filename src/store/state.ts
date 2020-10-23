import { IInitState } from "../reducers/init";

/**
 * Main application state. All substates are defined as types with the 
 * reducers. @see ./reducers
 */
export interface IApplicationState {
    init: IInitState,
}
