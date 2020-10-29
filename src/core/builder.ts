import { IDaysAgoQuestion, IFinalQuestion, INextQuestion, IYesNoQuestion, Question, QuestionId } from "./domain";

export class QuestionBuilder {

    private question: Partial<Question> = {};

    constructor(id: QuestionId) {
        this.question.id = id;
    }

    withTitle(title: string): QuestionBuilder {
        this.question.title = title;
        return this;
    }

    final(): IFinalQuestion {
        if(this.question.id && this.question.title) {
            return {
                id: this.question.id,
                title: this.question.title,
                type: "final",
            }
        }
        throw new Error("Invalid settings, id and title should be set");
    }

    withNext(next: QuestionId): INextQuestion {
        if(this.question.id && this.question.title) {
            return {
                id: this.question.id,
                type: "next",
                title: this.question.title,
                targets: {
                    next,
                },
            }
        }
        throw new Error("Invalid settings, id and title should be set");
    }

    withDaysAgo(next: QuestionId): IDaysAgoQuestion {
        if(this.question.id && this.question.title) {
            return {
                id: this.question.id,
                type: "day",
                title: this.question.title,
                targets: {
                    next,
                },
            }
        }
        throw new Error("Invalid settings, id and title should be set");
    }

    withYesNo(yes: QuestionId, no: QuestionId): IYesNoQuestion {
        if(this.question.id && this.question.title) {
            return {
                id: this.question.id,
                type: "yesno",
                title: this.question.title,
                targets: {
                    yes,
                    no,
                },
            }
        }
        throw new Error("Invalid settings, id and title should be set");
    }
}

export const builder = (id: QuestionId): QuestionBuilder => new QuestionBuilder(id);