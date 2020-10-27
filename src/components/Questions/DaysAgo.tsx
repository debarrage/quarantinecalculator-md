import dayjs from "dayjs";
import React, { useState } from "react";
import { QuestionProps } from ".";
import { IDaysAgoQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import { useDispatchNextQuestion } from "./hooks/useNextQuestion";
import * as Scaffold from "./Scaffold";

export const DaysAgo: React.FC<QuestionProps<IDaysAgoQuestion>> = (props) => {
    
    const [result, setResult] = useState<number>(0);

    const dispatcher = useDispatchNextQuestion();
    const next = () => dispatcher(props.question.targets.next, result);
    
    const min = () => {
        setResult(result - 1);
    }

    const plus = () => {
        if(result < 0) setResult(result + 1);
    }

    return (
        <Scaffold.Wrapper className="question_daysago">
            <Scaffold.Title {...props}/>
            <Scaffold.Body>
                <div className="button__min" onClick={min}>
                    <span className="button__text text">&lt;</span>
                </div>
                <div className="button__value daysago">
                    <span className="daysago__title text">
                        Aantal dagen geleden:
                    </span>
                    <span className="daysago__result">
                        {result}
                    </span>
                    <span className="daysago__dateresult">
                        {dayjs().add(result, "day").format("DD-MM-YYYY")}
                    </span>
                </div>
                <div className="button__plus" onClick={plus}>
                    <span className="button__text text">&gt;</span>
                </div>
            </Scaffold.Body>
            <Scaffold.Footer>
                <Buttons.Previous/>
                <Buttons.Next handler={next} />
            </Scaffold.Footer>
        </Scaffold.Wrapper>
    );
}
