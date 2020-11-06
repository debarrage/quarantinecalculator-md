import { QuestionId } from "./questions";

export interface IDesignation {
    id: QuestionId;
    designation: string | React.ReactElement;
}

export type Designations = Array<IDesignation>;
