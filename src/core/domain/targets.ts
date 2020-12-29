import { QuestionId } from ".";

/**
 * A target is where a question points to. 
 */
export interface ITarget {
    // Indicates whether a question is final
    final?: boolean;

    // A list of keys indicating different targets
    targets?: {[key: string]: QuestionId};
}

/**
 * A next target is a simple target, just pointing to a next question
 */
export interface INextTarget extends ITarget {
    targets: {
        next: QuestionId;
    }
}

/**
 * A yes no target points to 2 targets, depending on an answer.
 */
export interface IYesNoTarget extends ITarget {
    targets: {
        no: QuestionId;
        yes: QuestionId;
    }
}

export interface IOptionsTarget extends ITarget {
}

export interface IFinalTarget extends Omit<ITarget, "targets"> {
    final: true;
}
