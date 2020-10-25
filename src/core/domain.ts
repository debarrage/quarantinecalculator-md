
export type QuestionId = string;

export interface IQuestion {
    id: QuestionId;
    title: string;
    targets: {[key: string]: QuestionId};
}

export interface IQuestionResult<R> {
    result?: R;
}

export interface INextQuestion extends IQuestion {
    targets: {
        next: QuestionId;
    };
}

export interface IYesNoQuestion extends IQuestion, IQuestionResult<boolean> {
    targets: {
        no: QuestionId;
        yes: QuestionId;
    };
}

export interface IDayQuestion extends INextQuestion, IQuestionResult<number> {}

export type Question = IYesNoQuestion | IDayQuestion;

export function isNextQuestion(q: IQuestion): q is INextQuestion {
    return !!(q as INextQuestion).targets.next;
}

export function isYesNoQuestion(q: IQuestion): q is IYesNoQuestion {
    return !!(q as IYesNoQuestion).targets.yes
        &&!!(q as IYesNoQuestion).targets.no;
}

export function hasResult(q: Question): boolean{
    return q.result !== undefined;
}
