import { IQuestion } from "../../core/domain";
export * from "../App/Router";

export type QuestionProps<T extends IQuestion> = {
    question: T;
}
