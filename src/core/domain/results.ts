
// export type YesNoResult = boolean;
// export type NextResult = void;
// export type DayResult = number;

import { IDaysAgoQuestion, INextQuestion, IQuestion, IYesNoQuestion } from "./questions";


export interface IQuestionResult<T extends IQuestion, R> {
    question: T;
    type: T["type"];
    result?: R;
}

export type DaysAgoResult = IQuestionResult<IDaysAgoQuestion, number>;
export type NextResult = IQuestionResult<INextQuestion, void>;
export type YesNoResult = IQuestionResult<IYesNoQuestion, boolean>;

export type QuestionResultTypes = (YesNoResult | NextResult | DaysAgoResult)["result"]

export type QuestionResult = IQuestionResult<IQuestion, QuestionResultTypes>;


