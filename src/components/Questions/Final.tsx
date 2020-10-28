import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { QuestionProps } from ".";
import { IFinalQuestion } from "../../core/domain";
import { IApplicationState } from "../../store/state";
import * as Buttons from "./Button";
import * as Question from "./Question";

export const Final: React.FC<QuestionProps<IFinalQuestion>> = (props) => {

    const quarantine = useSelector<IApplicationState, number>(state => state.quarantine.days);

    return (
        <Question.Wrapper {...props} className="quarantine" >
            <Question.Title {...props}/>
            <Question.Body>
                {
                    (quarantine > 0) && (
                        <div className="quarantine__result">
                            <div className="quarantine__days">
                                <span className="text">{quarantine}</span>
                            </div>
                            <div className="quarantine__date">
                                <span className="text">Tot:</span>
                                <span className="text">{dayjs().add(quarantine).format("DD-MM-YYYY")}</span>
                            </div>
                        </div>
                    )
                }
            </Question.Body>
            <Question.Footer>
                <Buttons.Reset/>
            </Question.Footer>
        </Question.Wrapper>
    );
}
