import { INextQuestion, IYesNoQuestion } from ".";
import { IDesignation } from "./designations";
import { IDaysAgoQuestion, IFinalQuestion, IOptionsQuestion, IQuestion, IRelayQuestion } from "./questions";
import { DaysAgoResult, QuestionResult, YesNoResult } from "./results";
import { IFinalTarget, INextTarget, ITarget, IYesNoTarget } from "./targets";

// Question guards

export function isNextQuestion(q: IQuestion): q is INextQuestion {
    return q.type === "next";
}

export function isDayQuestion(q: IQuestion): q is IDaysAgoQuestion {
    return q.type === "day";
}

export function isOptionsQuestion(q: IQuestion): q is IOptionsQuestion {
    return q.type === "options";
}

export function isYesNoQuestion(q: IQuestion): q is IYesNoQuestion {
    return q.type === "yesno";
}

export function isRelayQuestion(q: IQuestion): q is IRelayQuestion {
    return q.type === "relay";
}

export function isFinal(q: IQuestion): q is IFinalQuestion {
    return q.type === "final";
}

// Target guards
export function isNextTarget(t: ITarget): t is INextTarget {
    return !!(t.targets && t.targets["next"]);
}

export function isYesNoTarget(t: ITarget): t is IYesNoTarget {
    return !!(t.targets && t.targets["yes"]);
}

export function isFinalTarget(t: ITarget): t is IFinalTarget {
    return !!t.final;
}

// Result guards

export function isDaysAgoResult(r: QuestionResult): r is DaysAgoResult {
    return isDayQuestion(r.question);
}

export function isYesNoResult(r: QuestionResult): r is YesNoResult {
    return isYesNoQuestion(r.question);
}

export function isDesignation(object: unknown): object is IDesignation {
    const designation = object as IDesignation;
    return !!designation.id && !!designation.designation;
}
