import { INextQuestion, IYesNoQuestion } from ".";
import { IDaysAgoQuestion, IFinalQuestion, IQuestion } from "./questions";

export function isNextQuestion(q: IQuestion): q is INextQuestion {
    return q.type === "next";
}

export function isDayQuestion(q: IQuestion): q is IDaysAgoQuestion {
    return q.type === "day";
}

export function isYesNoQuestion(q: IQuestion): q is IYesNoQuestion {
    return q.type === "yesno";
}

export function isFinal(q: IQuestion): q is IFinalQuestion {
    return q.type === "final";
}
