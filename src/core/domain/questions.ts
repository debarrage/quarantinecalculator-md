export type QuestionId = string;

export type QuestionType = "next" | "yesno" | "day" | "final" | "relay";

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

export interface IRelayQuestion extends IQuestion {
    type: "relay";
    yesCondition: QuestionId,
    targets: {
        no: QuestionId;
        yes: QuestionId;
    };
}

export interface IDaysAgoQuestion extends IQuestion {
    type: "day";
    targets: {
        next: QuestionId;
    };
}

export interface IFinalQuestion extends IQuestion {
    type: "final";
}

export type Question = IYesNoQuestion | IDaysAgoQuestion | INextQuestion | IFinalQuestion;
