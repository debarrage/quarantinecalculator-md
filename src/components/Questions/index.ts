import { IQuestion } from "../../core/domain";
export * from "./Router";

export type QuestionProps<T extends IQuestion> = {
    question: T;
}
