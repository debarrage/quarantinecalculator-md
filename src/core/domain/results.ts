import { IDaysAgoQuestion, INextQuestion, IOptionsQuestion, IQuestion, IYesNoQuestion } from "./questions";

/**
 * Result of a question
 */
export interface IQuestionResult<T extends IQuestion, R> {
    question: T;
    type: T["type"];
    value?: R;
}

/**
 * Result of IDaysAgoQuestion, it has a numerical result (days)
 * 
 * @see IDaysAgoQuestion
 */
export type DaysAgoResult = IQuestionResult<IDaysAgoQuestion, number>;

/**
 * Result of a INextQuestion. It has no value
 * 
 * @see INextQuestion
 */
export type NextResult = Omit<IQuestionResult<INextQuestion, void>, "value">;

/**
 * Result of a IYesNoQuestion, it has a boolean result
 * 
 * @see IYesNoQuestion
 */
export type YesNoResult = IQuestionResult<IYesNoQuestion, boolean>;

/**
 * Result of a IOptionsquestion, it has a string result indicating the chosen target
 * 
 * @see IOptionsQuestion
 */
export type OptionsResult = IQuestionResult<IOptionsQuestion, string>;

/**
 * Summary of the value types of an IQuestionResult
 */
export type QuestionResultTypes = (YesNoResult | DaysAgoResult | OptionsResult)["value"]

/**
 * Summary of all possible Question Results
 */
export type QuestionResult = IQuestionResult<IQuestion, QuestionResultTypes>;

/**
 * Chain of results, resulting in a path.
 */
export type QuestionPath = Array<QuestionResult>;
