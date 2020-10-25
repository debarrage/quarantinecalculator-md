import { IQuestion } from "../../core/domain";

export type QuestionProps<T extends IQuestion> = {
    question: T;
}
