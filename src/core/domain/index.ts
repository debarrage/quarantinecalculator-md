import { IQuestion } from "./questions";

export * from "./guards";
export * from "./questions";
export * from "./results";



export interface IQuestionVoidResult<T extends IQuestion> {
    question: T;
}

export interface IQuestionResult<T extends IQuestion, R> extends IQuestionVoidResult<T> {
    result?: R;
}







