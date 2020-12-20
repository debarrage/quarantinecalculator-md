import { SyncIcon } from "@primer/octicons-react";
import React from "react";
import { QuestionProps } from ".";
import { CURRENT_RULESET_VERSION } from "../../core";
import { INextQuestion } from "../../core/domain";
import { Next } from "./Next";
import "./Start.scss";

export const Start: React.FC<QuestionProps<INextQuestion>> = (props) => {

    return (
        <Next {...props}>
            <div className="question__help help">
                <div className="help__content">
                    Gebaseerd op Sciensano richtlijnen van {CURRENT_RULESET_VERSION}
                </div>
                <div className="help__content">
                    Gebruik de onderstaande knoppen
                    om de vragen te beantwoorden. Klik op <SyncIcon verticalAlign="middle" />
                    om opnieuw te beginnen.
                </div>
            </div>
        </Next>
    );
}
