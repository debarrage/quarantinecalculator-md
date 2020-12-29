import { INextTarget, IOptionsTarget, ITarget, IYesNoTarget } from "./targets";

/**
 * List of all the arrays
 */
export type QuestionId = "invalid-id" | "0" | "1" | "r1" | "r10" | "r11n" | "r11" | "r12" | "r2n" | "r2y" | "r3" | "r4" | "r5y" | "r6y" | "r7y" | "r8" | "r9n" | "rf3" | "rf4" | "rf5" | "rf1" | "rf2" | "s1" | "s11" | "s10" | "s2n" | "s3n" | "s3y" | "s4" | "s5n" | "s5y" | "s6n" | "s6y" | "s7n" | "s7y" | "s12" | "s13" | "s8n" | "s9n" | "sf1" | "sf2" | "sf3" | "sf4" | "sf5" | "sf6" | "sf9" | "sf10" | "sf11" | "sf12" | "s13n";

/**
 * Different question types
 */
export type QuestionType = 
    "next" |        // Question where you just can type next
    "yesno" |       // Question where you can answer yes or no, the result is boolean
    "options" |     // Question where you can choose between options
    "day" |         // Question where you can indicate how many days ago something happened
    "final" |       // Final step in the tree
    "relay";        // Relay automatically jumps to a next step

/**
 * General question interface.
 */
export interface IQuestion extends ITarget {
    id: QuestionId;
    title: string;
    type: QuestionType;
}

/**
 * Next question just points to a following question. It is an informational question.
 */
export interface INextQuestion extends Omit<IQuestion, "targets">, INextTarget{
    type: "next";
}

/**
 * A yes no question points to two targets depending on the answer. The result of a
 * question is a boolean.
 */
export interface IYesNoQuestion extends Omit<IQuestion, "targets">, IYesNoTarget {
    type: "yesno";
}

/**
 * A yes no question points to two targets depending on the answer. The result of a
 * question is a boolean.
 */
export interface IOptionsQuestion extends Omit<IQuestion, "targets">, IOptionsTarget {
    type: "options";
}

/**
 * A relay question is an automatic yes no question. It is not a real question but should
 * automatically transition to the next question based on the yescondition.
 */
export interface IRelayQuestion extends Omit<IQuestion, "targets">, IYesNoTarget {
    type: "relay";

    // Id of the question. If the question is answered with yes, then the yes target is chosen. Otherwise no.
    yesCondition: QuestionId,
}

/**
 * Many of the questions in the flow are of the type 'how many days ago did the symptoms start?'. So 
 * that is covered by the days ago question. The result is a number in days.
 */
export interface IDaysAgoQuestion extends Omit<IQuestion, "targets">, INextTarget {
    type: "day";
}

/**
 * Also not a real question, but the final screen.
 */
export interface IFinalQuestion extends Omit<IQuestion, "targets"> {
    type: "final";
    final: true;
}

/**
 * Wrap up for all the questions
 */
export type Question = IYesNoQuestion | IOptionsQuestion | IDaysAgoQuestion | INextQuestion | IFinalQuestion;

/**
 * An array of questions
 */
export type Questions = Array<IQuestion>;
