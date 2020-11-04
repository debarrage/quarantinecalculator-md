import { QuestionId } from ".";
import { IFlowState } from "../store/reducers/flow";
import { IFinalQuestion, isDaysAgoResult, QuestionResult } from "./domain";

export class Calculator {
    constructor(private stack: IFlowState["stack"]) {}

    public calculate(final: IFinalQuestion): number {

        const { id } = final;

        if(id === "sf7") {
            return this.calculateF3();
        }

        if(id === "rf3") {
            if(this.getYesNoResult("s8n")) {
                const f2 = this.calculateF2();
                const f3 = this.calculateF3();

                return f2 > f3 ? f2 : f3;
            } else {
                return this.calculateF2();
            }
        }

        return -1;
    }

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

    calculateF2(): number {
        const isHouseMate = this.getYesNoResult("r3");
        const isHouseQuarantinePossible = this.getYesNoResult("r8");
        if(isHouseMate) {
            if(isHouseQuarantinePossible) {
                return this.getDaysResult("r9n") + 10;
            } else {
                return this.getDaysResult("r4") + 17;
            }
        } else {
            return this.getDaysResult("r5y") + 10;
        }
    }

    calculateF3(): number {
        return this.getDaysResult("s3y") + 7;
    }
}
