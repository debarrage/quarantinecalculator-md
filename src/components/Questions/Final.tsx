import dayjs from "dayjs";
import React from "react";
import { useSelector } from "react-redux";
import { QuestionProps } from ".";
import { IFinalQuestion } from "../../core/domain";
import { IApplicationState } from "../../store/state";
import * as Buttons from "./Button";
import * as Scaffold from "./Scaffold";

export const Final: React.FC<QuestionProps<IFinalQuestion>> = (props) => {

    const quarantine = useSelector<IApplicationState, number>(state => state.quarantine.days);

    return (
        <Scaffold.Wrapper {...props} className="quarantine" >
            <Scaffold.Title {...props}/>
            <Scaffold.Body>
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
            </Scaffold.Body>
            <Scaffold.Footer>
                <Buttons.Reset/>
            </Scaffold.Footer>
        </Scaffold.Wrapper>
    );
}
