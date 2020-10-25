import { IQuestion, isNextQuestion, isYesNoQuestion } from "../domain";
import { QuestionResultMonad } from "./derived";
import { IMonad } from "./types";

export class QuestionMonad<T extends IQuestion> implements IMonad<T>{
    constructor(protected question: T | QuestionMonad<T>){}

    get(): T {
        if(this.isMonad(this.question)) {
            return this.question.get();
        }
        return this.question;
    }

    isNext(): boolean {
        return isNextQuestion(this.get());
    }

    isYesNo(): boolean {
        return isYesNoQuestion(this.get());
    }

    withResult<R>(result: R): QuestionResultMonad<T, R> {
        return new QuestionResultMonad(this, result);
    }

    private isMonad(q: T | QuestionMonad<T>): q is QuestionMonad<T> {
        return !!(q as QuestionMonad<T>).get;
    }
}
