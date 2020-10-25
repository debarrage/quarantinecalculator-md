import { INextQuestion, IQuestion } from "../domain";
import { QuestionMonad } from "./core";
import { IResultMonad } from "./types";

export class QuestionResultMonad<T extends IQuestion, R> extends QuestionMonad<T> implements IResultMonad<R>{
    constructor(protected question: T | QuestionMonad<T>, private result: R) {
        super(question);
    }

    getResult(): R {
        return this.result;
    }
}

export class NextMonad<T extends QuestionMonad<INextQuestion>> extends QuestionMonad<INextQuestion> {
    constructor(private current: T, private handler: (context: T) => void) {
        super(current);
    }
    
    next(): void  {
        this.handler(this.current);
    }
}
