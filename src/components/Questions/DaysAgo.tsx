import { DashIcon, PlusIcon } from "@primer/octicons-react";
import classNames from "classnames";
import dayjs from "dayjs";
import React, { useState } from "react";
import { QuestionProps } from ".";
import { IDaysAgoQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import "./DaysAgo.scss";
import { useNextQuestions } from "./hooks/useNextQuestion";
import * as Question from "./Question";

export const DaysAgo: React.FC<QuestionProps<IDaysAgoQuestion>> = (props) => {
    
    const [result, setResult] = useState<number>(0);

    const dispatcher = useNextQuestions();
    const next = () => dispatcher(result);
    
    const min = () => {
        setResult(result - 1);
    }

    const plus = () => {
        if(result < 0) setResult(result + 1);
    }

    return (
        <Question.Wrapper {...props}>
            <Question.Title {...props}/>
            <Question.Body className="daysago" >
                <div className={classNames("daysago__plus", { "button--disabled": result === 0 })} onClick={plus}>
                    <span className="button__text text">
                        <DashIcon size="large" />
                    </span>
                </div>
                <div className="button__value daysago__value" onClick={min}>
                    <span className="daysago__title text">
                        Aantal dagen geleden:
                    </span>
                    <span className="daysago__result">
                        {Math.abs(result)}
                    </span>
                    <span className="daysago__dateresult">
                        {dayjs().add(result, "day").format("DD-MM-YYYY")}
                    </span>
                </div>
                <div className="daysago__min" onClick={min}>
                    <span className="button__text text">
                        <PlusIcon size="large"/>
                    </span>
                </div>
            </Question.Body>
            <Question.ButtonFooter>
                <Buttons.Next handler={next} />
            </Question.ButtonFooter>
        </Question.Wrapper>
    );
}
