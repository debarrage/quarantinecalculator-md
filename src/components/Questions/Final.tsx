import classNames from "classnames";
import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { QuestionProps } from ".";
import { IFinalQuestion } from "../../core/domain";
import { IApplicationState } from "../../store/state";
import * as Buttons from "./Button";
import "./Final.scss";
import * as Question from "./Question";

export const Final: React.FC<QuestionProps<IFinalQuestion>> = (props) => {

    const result = useSelector<IApplicationState, number>(state => state.quarantine.days);
    const hasResult = result > 0;

    return (
        <Question.Wrapper {...props} className={classNames("final", { "final--result": hasResult })}>
            <Question.Title {...props}/>
            {hasResult&& (
                <Question.Body>
                    <div className="final__result">
                        <div className="final__days">
                            <span className="text">{result}</span>
                        </div>
                        <div className="final__date">
                            <span className="text">Tot:</span>
                            <span className="text">{dayjs().add(result, "day").format("DD-MM-YYYY")}</span>
                        </div>
                    </div>
                </Question.Body>
            )}
            <Question.Footer>
                <Buttons.Reset/>
            </Question.Footer>
        </Question.Wrapper>
    );
}
