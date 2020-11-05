import { IFinalQuestion } from "..";
import { IFlowState } from "../../store/reducers/flow";
import { findDesignation } from "../config";
import { StackUtils } from "./util";

export class Designation {
    private stackUtils: StackUtils;

    constructor(private stack: IFlowState["stack"]) {
        this.stackUtils = new StackUtils(stack);

    }

    public find(final: IFinalQuestion) {
        const referrer = this.stackUtils.getReferringQuestion();
        console.log(referrer);
        if(referrer) {
            if(referrer.question.id === "s3n") {
                return findDesignation("s3n");
            }
            
            if(final.id === "sf6") {

                if(referrer.question.id === "s7y") {
                    return findDesignation("sy7");
                }

                if(referrer.question.id === "s10" && referrer.result) {
                    return findDesignation("s10");
                }
            }
        }
    }
}
