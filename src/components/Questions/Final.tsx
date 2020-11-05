import classNames from "classnames";
import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { QuestionProps } from ".";
import { findDesignation } from "../../core";
import { IFinalQuestion } from "../../core/domain";
import { IQuarantineState } from "../../store/reducers/quarantine";
import { IApplicationState } from "../../store/state";
import * as Buttons from "./Button";
import "./Final.scss";
import * as Question from "./Question";

export const Final: React.FC<QuestionProps<IFinalQuestion>> = (props) => {

    const { days, designation } = useSelector<IApplicationState, IQuarantineState>(state => state.quarantine);
    const hasDays = days > 0;
    const hasResult = hasDays || designation;

    return (
        <Question.Wrapper {...props} className={classNames("final", { "final--result": hasResult })}>
            <Question.Title {...props}/>
            <Question.Body>
                {hasResult && (
                    <div className="final__result">
                        {hasDays && (
                            <>
                                <div className="final__days">
                                    <span className="text">{days}</span>
                                </div>
                                <div className="final__date">
                                    <span className="text">Tot:</span>
                                    <span className="text">{dayjs().add(days, "day").format("DD-MM-YYYY")}</span>
                                </div>
                            </>
                        )}
                        {designation && (
                            <div className="final__designation">
                                <span className="text">{findDesignation(designation)?.designation}</span>
                            </div>
                        )}
                    </div>
                )}
            </Question.Body>
            <Question.Footer>
                <Buttons.Reset/>
            </Question.Footer>
        </Question.Wrapper>
    );
}
