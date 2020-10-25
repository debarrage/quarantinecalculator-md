import { QuestionId } from "../domain";

export type QuestionHandler<T> = (id: QuestionId, context: T) => void;

export interface IMonad<T> {
    get(): T
}

export interface IResultMonad<T> {
    getResult(): T;
}
