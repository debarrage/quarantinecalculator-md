import React from "react";
import { isDayQuestion, isFinal, isNextQuestion, isYesNoQuestion } from "../../core/domain";
import { DaysAgo } from "../Questions/DaysAgo";
import { Final } from "../Questions/Final";
import { useCurrentQuestion } from "../Questions/hooks/useCurrentQuestion";
import { Next } from "../Questions/Next";
import * as Scaffold from "../Questions/Question";
import { YesNo } from "../Questions/YesNo";

export const Router: React.FC = () => {
    
    const question = useCurrentQuestion();

    if(question) {
        if(isNextQuestion(question)) {
            return <Next question={question} />;
        }

        if(isYesNoQuestion(question)) {
            return <YesNo question={question} />;
        }

        if(isDayQuestion(question)) {
            return <DaysAgo question={question} />;
        }

        if(isFinal(question)) {
            return <Final question={question} />;
        }
    }

    return (
        <Scaffold.Body>Vraag is niet gevonden...</Scaffold.Body>
    );
}