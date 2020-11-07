import { QuestionId } from "./questions";

/**
 * A designation is a part of the result. It contains extra information about
 * what to do when quarantine is imposed.
 */
export interface IDesignation {
    id: QuestionId;
    designation: string | React.ReactElement;
}

/**
 * Array of designations
 */
export type Designations = Array<IDesignation>;
