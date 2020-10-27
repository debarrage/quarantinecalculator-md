import React from "react";
import { QuestionProps } from ".";
import { INextQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import { useNextQuestions } from "./hooks/useNextQuestion";
import * as Scaffold from "./Scaffold";

export const Next: React.FC<QuestionProps<INextQuestion>> = (props) => {
    
    const dispatcher = useNextQuestions();
    const next = () => dispatcher(props.question.targets.next);

    return (
        <Scaffold.Wrapper {...props}>
            <Scaffold.Title {...props}/>
            <Scaffold.ButtonFooter>
                <Buttons.Next handler={next} />
            </Scaffold.ButtonFooter>
        </Scaffold.Wrapper>
    );
}
