import React from "react";
import { INITIAL_QUESTION_ID } from "../../core";
import { isDayQuestion, isFinal, isNextQuestion, isOptionsQuestion, isYesNoQuestion } from "../../core/domain";
import { DaysAgo } from "../Questions/DaysAgo";
import { Final } from "../Questions/Final";
import { useCurrentQuestion } from "../Questions/hooks/useCurrentQuestion";
import { Next } from "../Questions/Next";
import { Options } from "../Questions/Options";
import * as Question from "../Questions/Question";
import { Start } from "../Questions/Start";
import { YesNo } from "../Questions/YesNo";

/**
 * The Router component. It uses the current question to determine the rendering.
 */
export const Router: React.FC = () => {
    
    const question = useCurrentQuestion();

    if(question) {        
        if(isNextQuestion(question)) {
            if(question.id === INITIAL_QUESTION_ID) {
                return <Start question={question} />;
            }
            return <Next question={question} />;
        }

        if(isYesNoQuestion(question)) {
            return <YesNo question={question} />;
        }

        if(isDayQuestion(question)) {
            return <DaysAgo question={question} />;
        }

        if(isOptionsQuestion(question)) {
            return <Options question={question} />
        }

        if(isFinal(question)) {
            return <Final question={question} />;
        }
    }

    return (
        <Question.Wrapper>
            <Question.Body>
                <span className="text">
                    Vraag is niet gevonden...
                </span>
            </Question.Body>
        </Question.Wrapper>
    );
}
