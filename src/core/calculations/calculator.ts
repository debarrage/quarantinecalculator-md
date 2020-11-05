import { IFlowState } from "../../store/reducers/flow";
import { IFinalQuestion } from "../domain";
import { StackUtils } from "./util";

/**
 * Calculates the number of days in quarantine based on the Sciensano documentation flows
 * based on the path followed through the flow.
 */
export class Calculator {

    private stackUtils: StackUtils;

    constructor(private stack: IFlowState["stack"]) {
        this.stackUtils = new StackUtils(stack);
    }

    public calculate(final: IFinalQuestion): number {

        const { id } = final;

        if(id === "sf6") {
            return this.calculateF3();
        }

        if(id === "rf3") {
            if(this.stackUtils.getYesNoResult("s8n")) {
                const f2 = this.calculateF2();
                const f3 = this.calculateF3();

                return f2 > f3 ? f2 : f3;
            } else {
                return this.calculateF2();
            }
        }

        return -1;
    }

    private calculateF2(): number {
        const isHouseMate = this.stackUtils.getYesNoResult("r3");
        const isHouseQuarantinePossible = this.stackUtils.getYesNoResult("r8");
        if(isHouseMate) {
            if(isHouseQuarantinePossible) {
                return this.stackUtils.getDaysResult("r9n") + 10;
            } else {
                return this.stackUtils.getDaysResult("r4") + 17;
            }
        } else {
            return this.stackUtils.getDaysResult("r5y") + 10;
        }
    }

    private calculateF3(): number {
        return this.stackUtils.getDaysResult("s3y") + 7;
    }
}
