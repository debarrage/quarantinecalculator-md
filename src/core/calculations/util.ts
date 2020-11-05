import { isDaysAgoResult, QuestionId, QuestionResult } from "..";
import { IFlowState } from "../../store/reducers/flow";

export class StackUtils {
    constructor(private stack: IFlowState["stack"]) {}

    public find(id: QuestionId): QuestionResult {
        const question = this.stack.find(s => s.question.id === id);
        if(question) {
            return question;
        } else {
            throw new Error(`Cannot find question id ${id}`);
        }
    }

    public tryFind(id: QuestionId): QuestionResult | undefined {
        try {
            return this.find(id);
        } catch(e) {
            console.warn(e.messasge);
        }
    }
    
    public getDaysResult(id: QuestionId): number {
        const result = this.find(id);
        let days = 0;
        if(isDaysAgoResult(result)) {
            days = result.result || 0;
        } else {
            console.warn(`Question ${id} is not of type DaysAgoResult`)
        }   
        return days;
    }

    public getYesNoResult(id: QuestionId): boolean {
        const result = this.tryFind(id);
        if(result) {
            return !!result.result;
        }
        return false;
    }

    public getReferringQuestion() {
        if(this.stack.length >= 2) {
            return this.stack.slice(-1)[0]
        }
    }
}
