import { INITIAL_QUESTION_ID } from ".";
import { IDaysAgoQuestion, IDesignation, IFinalQuestion, INextQuestion, IOptionsQuestion, IRelayQuestion, IYesNoQuestion, Question, QuestionId } from "../domain";

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

    options(): OptionsQuestionBuilder {
        const {id, title} = this.question;
        if(id && title) {
            return new OptionsQuestionBuilder(id, title);
        } else {
            throw new Error("Both id and title are required");
        }
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

export class OptionsQuestionBuilder {
    private question: IOptionsQuestion = {
        id: INITIAL_QUESTION_ID,
        title: "",
        type: "options",
        targets: {}
    };

    constructor(id: QuestionId, title: string) {
        this.question.id = id;
        this.question.title = title;
    }

    add(question: string, id: QuestionId) {
        if(this.question.targets) {
            this.question.targets[question] = id;
        }

        return this;
    }

    build() {
        return this.question;
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
