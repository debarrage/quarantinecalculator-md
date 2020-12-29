import { IFlowState } from "../../store/reducers/flow";
import { IFinalQuestion } from "../domain";
import { PathUtils, pathUtils } from "./utils";

/**
 * Calculates the number of days in quarantine based on the Sciensano documentation flows
 * based on the path followed through the flow.
 */
export class Calculator {

    private utils: PathUtils;

    constructor(private path: IFlowState["path"]) {
        this.utils = pathUtils(path);
    }

    public calculate(final: IFinalQuestion): number {

        const { id } = final;

        if(id === "sf6") {
            return this.sf6();
        }

        if(id === "rf2") {
            return this.rf2();
        }

        if(id === "rf3") {
            if(this.utils.getYesNoResult("s8n")) {
                const f2 = this.rf3();
                const f3 = this.sf6();

                return f2 > f3 ? f2 : f3;
            } else {
                return this.rf3();
            }
        }

        if(id === "rf4") {
            return this.utils.getDaysResult("r11") + 7;
        }

        return -1;
    }

    private rf2(): number {
        return this.utils.getDaysResult("r7y") + 7;
    }

    private rf3(): number {
        const isHouseMate = this.utils.getYesNoResult("r3");
        const isHouseQuarantinePossible = this.utils.getYesNoResult("r8");
        if(isHouseMate) {
            if(isHouseQuarantinePossible) {
                return this.utils.getDaysResult("r9n") + 10;
            } else {
                return this.utils.getDaysResult("r4") + 17;
            }
        } else {
            return this.utils.getDaysResult("r10") + 10;
        }
    }

    private sf6(): number {
        return this.utils.getDaysResult("s3y") + 7;
    }
}
