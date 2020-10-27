import React from "react";
import { QuestionProps } from ".";
import { IFinalQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import * as Scaffold from "./Scaffold";

export const Final: React.FC<QuestionProps<IFinalQuestion>> = (props) => {
    return (
        <Scaffold.Wrapper {...props}>
            <Scaffold.Title {...props}/>
            <Scaffold.Footer>
                <Buttons.Reset/>
            </Scaffold.Footer>
        </Scaffold.Wrapper>
    );
}
