import { IDaysAgoQuestion, IDesignation, IFinalQuestion, INextQuestion, IRelayQuestion, IYesNoQuestion, Question, QuestionId } from "../domain";

/**
 * Helper to build a question in a fluent manner.
 */
export class QuestionBuilder {

    private question: Partial<Question> = {};

    constructor(id: QuestionId) {
        this.question.id = id;
    }

    title(title: string): QuestionBuilder {
        this.question.title = title;
        return this;
    }

    final(): IFinalQuestion {
        const { id, title } = this.question;
        if(id && title) {
            return { 
                final: true,
                id, 
                title, 
                type: "final", 
            };
        }
        throw new Error("Invalid settings, id and title should be set");
    }

    next(next: QuestionId): INextQuestion {
        const { id, title } = this.question;
        if(id && title) {
            return {
                id,
                title,
                type: "next",
                targets: {
                    next,
                },
            }
        }
        throw new Error("Invalid settings, id and title should be set");
    }

    daysAgo(next: QuestionId): IDaysAgoQuestion {
        return {
            ...this.next(next),
            type: "day",
        };
    }

    yesNo(yes: QuestionId, no: QuestionId): IYesNoQuestion {
        const { id, title } = this.question;
        if(id && title) {
            return {
                id,
                type: "yesno",
                title,
                targets: {
                    yes,
                    no,
                },
            }
        }
        throw new Error("Invalid settings, id and title should be set");
    }

    relay(yes: QuestionId, no: QuestionId, yesCondition: QuestionId): IRelayQuestion {
        return {
            ...this.title("-").yesNo(yes, no),
            type: "relay",
            yesCondition,
        };     
    }
}

/**
 * Helper to build a designation in a fluent manner.
 */
export class DesignationBuilder {
    private designation: Partial<IDesignation> = {};

    constructor(id: QuestionId) {
        this.designation.id = id;
    }

    text(designation: string | React.ReactElement): IDesignation {
        const { id } = this.designation;
        if(id) {
            return {
                id,
                designation,
            }
        }
        throw new Error("Invalid settings, id should be set");
    }
}
