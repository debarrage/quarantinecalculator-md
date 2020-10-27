import React from "react";
import { isNextQuestion, isYesNoQuestion } from "../../core/domain";
import { useCurrentQuestion } from "../Questions/hooks/useCurrentQuestion";
import { Next } from "../Questions/Next";
import * as Scaffold from "../Questions/Scaffold";
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
    }

    return (
        <Scaffold.Body>Vraag is niet gevonden...</Scaffold.Body>
    );
}
