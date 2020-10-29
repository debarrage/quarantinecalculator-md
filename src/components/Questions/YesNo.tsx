import React from "react";
import { QuestionProps } from ".";
import { IYesNoQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import { useNextQuestions } from "./hooks/useNextQuestion";
import * as Question from "./Question";

export const YesNo: React.FC<QuestionProps<IYesNoQuestion>> = (props) => {
    
    const dispatcher = useNextQuestions();
    const yes = () => dispatcher(props.question.targets.yes, true);
    const no = () => dispatcher(props.question.targets.no, false);

    return (
        <Question.Wrapper {...props}>
            <Question.Title {...props}/>
            <Question.ButtonFooter>
                <Buttons.Generic handler={yes} name="yes">
                    Ja
                </Buttons.Generic>
                <Buttons.Generic handler={no} name="no">
                    Nee
                </Buttons.Generic>
            </Question.ButtonFooter>
        </Question.Wrapper>
    );
}
