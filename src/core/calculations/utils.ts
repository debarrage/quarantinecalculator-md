import { isDaysAgoResult, QuestionId, QuestionResult } from "..";
import { IFlowState } from "../../store/reducers/flow";

/**
 * Utils to search the path.
 */
export class PathUtils {
    constructor(private path: IFlowState["path"]) {}

    public find(id: QuestionId): QuestionResult {
        const question = this.tryFind(id);
        if(question) {
            return question;
        } else {
            throw new Error(`Cannot find question id ${id}`);
        }
    }

    public tryFind(id: QuestionId): QuestionResult | undefined {
        return this.path.find(s => s.question.id === id);
    }
    
    /**
     * Get the days result (number) from the path. The id must be available
     * in the path. If not, it will throw an error.
     * 
     * @param id 
     */
    public getDaysResult(id: QuestionId): number {
        const result = this.find(id);
        let days = 0;
        if(isDaysAgoResult(result)) {
            days = result.value || 0;
        } else {
            console.warn(`Question ${id} is not of type DaysAgoResult`)
        }   
        return days;
    }

    /**
     * Get a yes/no result (boolean). If the question cannot be found. It returns
     * false.
     * 
     * @param id 
     */
    public getYesNoResult(id: QuestionId): boolean {
        const result = this.tryFind(id);
        if(result) {
            return !!result.value;
        }
        return false;
    }
}

export const pathUtils = (path: IFlowState["path"]) => new PathUtils(path);
