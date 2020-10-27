export type QuestionId = string;

export type QuestionType = "next" | "yesno" | "day" | "final";

export interface IQuestion {
    id: QuestionId;
    title: string;
    type: QuestionType;
    targets?: {[key: string]: QuestionId};
}


export interface INextQuestion extends IQuestion {
    type: "next";
    targets: {
        next: QuestionId;
    };
}

export interface IYesNoQuestion extends IQuestion {
    type: "yesno";
    targets: {
        no: QuestionId;
        yes: QuestionId;
    };
}

export interface IDayQuestion extends IQuestion {
    type: "day";
    targets: {
        next: QuestionId;
    };
}

export interface IFinalQuestion extends IQuestion {
    type: "final";
}

export type Question = IYesNoQuestion | IDayQuestion | INextQuestion | IFinalQuestion;
