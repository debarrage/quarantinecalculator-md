import React from "react";
import { QuestionProps } from ".";
import { INextQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import { useDispatchNextQuestion } from "./hooks/useNextQuestion";
import * as Scaffold from "./Scaffold";

export const Next: React.FC<QuestionProps<INextQuestion>> = (props) => {
    
    const dispatcher = useDispatchNextQuestion();
    const next = () => dispatcher(props.question.targets.next);

    return (
        <Scaffold.Wrapper className="question_next">
            <Scaffold.Title {...props}/>
            <Scaffold.Footer>
                <Buttons.Previous/>
                <Buttons.Next handler={next} />
            </Scaffold.Footer>
        </Scaffold.Wrapper>
    );
}
