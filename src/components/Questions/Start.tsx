import { SyncIcon } from "@primer/octicons-react";
import React from "react";
import { QuestionProps } from ".";
import { INextQuestion } from "../../core/domain";
import { Next } from "./Next";
import "./Start.scss";

export const Start: React.FC<QuestionProps<INextQuestion>> = (props) => {

    return (
        <Next {...props}>
            <div className="question__help help">
                <div className="help__content">
                    <strong>Een woordje uitleg...</strong> Gebruik de onderstaande knoppen
                    om de vragen te beantwoorden. Klik op <SyncIcon verticalAlign="middle" />
                    om opnieuw te beginnen. <br/>

                    Sommige vragen kan je gewoon op 'Volgende' klikken, de meeste vragen zijn Ja-Nee vragen. 
                    In een laatste type kan je aangeven hoeveel dagen iets geleden is. Klik op het cijfer om
                    het aantal dagen op te geven of op +/-.
                </div>
            </div>
        </Next>
    );
}
