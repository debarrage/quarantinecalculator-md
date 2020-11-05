import { INextQuestion, IYesNoQuestion } from ".";
import { Designation } from "./designations";
import { IDaysAgoQuestion, IFinalQuestion, IQuestion, IRelayQuestion } from "./questions";
import { DaysAgoResult, QuestionResult, YesNoResult } from "./results";

export function isNextQuestion(q: IQuestion): q is INextQuestion {
    return q.type === "next";
}

export function isDayQuestion(q: IQuestion): q is IDaysAgoQuestion {
    return q.type === "day";
}

export function isYesNoQuestion(q: IQuestion): q is IYesNoQuestion {
    return q.type === "yesno";
}

export function isYesNoRelayQuestion(q: IQuestion): q is IRelayQuestion {
    return q.type === "relay";
}

export function isFinal(q: IQuestion): q is IFinalQuestion {
    return q.type === "final";
}

export function isDaysAgoResult(r: QuestionResult): r is DaysAgoResult {
    return isDayQuestion(r.question);
}

export function isYesNoResult(r: QuestionResult): r is YesNoResult {
    return isYesNoQuestion(r.question);
}

export function isDesignation(object: unknown): object is Designation {
    const designation = object as Designation;
    return !!designation.id && !!designation.designation;
}
