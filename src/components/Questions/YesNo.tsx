import React from "react";
import { QuestionProps } from ".";
import { IYesNoQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import { useDispatchNextQuestion } from "./hooks/useNextQuestion";
import * as Scaffold from "./Scaffold";

export const YesNo: React.FC<QuestionProps<IYesNoQuestion>> = (props) => {
    
    const dispatcher = useDispatchNextQuestion();
    const yes = () => dispatcher(props.question.targets.yes, false);
    const no = () => dispatcher(props.question.targets.yes, true);

    return (
        <Scaffold.Wrapper className="question_next">
            <Scaffold.Title {...props}/>
            <Scaffold.Footer>
                <Buttons.Previous/>
                <Buttons.Generic handler={no} name="no">
                    Nee
                </Buttons.Generic>
                <Buttons.Generic handler={yes} name="yes">
                    Ja
                </Buttons.Generic>
            </Scaffold.Footer>
        </Scaffold.Wrapper>
    );
}
