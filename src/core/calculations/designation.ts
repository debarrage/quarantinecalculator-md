import { IFinalQuestion } from "..";
import { IFlowState } from "../../store/reducers/flow";
import { findDesignation } from "../config";
import { PathUtils, pathUtils } from "./utils";

export class Designation {
    private utils: PathUtils;

    constructor(private path: IFlowState["path"]) {
        this.utils = pathUtils(path);
    }

    public find(final: IFinalQuestion) {
        if(final.id === "sf2") {
            return findDesignation("sf2");
        }
        
        if(final.id === "sf6") {
            if(this.utils.getYesNoResult("s7y")) {
                return findDesignation("s7y");
            }

            if(this.utils.getYesNoResult("s10")) {
                return findDesignation("s10");
            }
        }
    }
}
