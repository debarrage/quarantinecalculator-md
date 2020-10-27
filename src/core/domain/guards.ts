import { INextQuestion, IYesNoQuestion, Question } from ".";
import { IDaysAgoQuestion, IQuestion } from "./questions";

export function isNextQuestion(q: IQuestion): q is INextQuestion {
    return q.type === "next";
}

export function isDayQuestion(q: IQuestion): q is IDaysAgoQuestion {
    return q.type === "day";
}

export function isYesNoQuestion(q: IQuestion): q is IYesNoQuestion {
    return q.type === "yesno";
}

export function isFinal(q: Question): boolean {
    return q.type === "final";
}
