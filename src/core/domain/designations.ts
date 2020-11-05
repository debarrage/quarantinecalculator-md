import { QuestionId } from "./questions";

export type Designation = { id: QuestionId, designation: string | React.ReactElement };
export type Designations = Array<Designation>;
