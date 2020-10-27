import React from "react";
import { isNextQuestion, isYesNoQuestion } from "../../core/domain";
import { useCurrentQuestion } from "./hooks/useCurrentQuestion";
import { Next } from "./Next";
import * as Scaffold from "./Scaffold";
import { YesNo } from "./YesNo";

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
