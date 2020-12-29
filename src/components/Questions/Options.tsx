import { ChevronRightIcon } from "@primer/octicons-react";
import React from "react";
import { QuestionProps } from ".";
import { IOptionsQuestion } from "../../core/domain";
import { useNextQuestions } from "./hooks/useNextQuestion";
import "./Options.scss";
import * as Question from "./Question";

export const Options: React.FC<QuestionProps<IOptionsQuestion>> = (props) => {
    
    const dispatcher = useNextQuestions();
    const targets = props.question.targets || {};

    const options = Object.keys(targets).map(question => ({
        id: targets[question],
        question,
    }));

    return (
        <Question.Wrapper {...props}>
            <Question.Title {...props}/>
            <Question.Body className="options" >
            { options.map(o => (
                <div className="options__question" key={o.id} onClick={() => dispatcher(o.id)}>
                    <span>{o.question}</span>
                    <ChevronRightIcon size="large" verticalAlign="middle" />
                </div>
            )) }
            </Question.Body>
            <Question.ButtonFooter>
            </Question.ButtonFooter>
        </Question.Wrapper>
    );
}
