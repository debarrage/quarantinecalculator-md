import React from "react";
import { QuestionProps } from ".";
import { INextQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import { useNextQuestions } from "./hooks/useNextQuestion";
import * as Question from "./Question";

export const Next: React.FC<QuestionProps<INextQuestion>> = (props) => {
    
    const dispatcher = useNextQuestions();
    const next = () => dispatcher();

    

    return (
        <Question.Wrapper {...props}>
            <Question.Title {...props}/>
            <Question.Body>
                {props.children}
            </Question.Body>
            <Question.ButtonFooter>
                <Buttons.Next handler={next} />
            </Question.ButtonFooter>
        </Question.Wrapper>
    );
}
