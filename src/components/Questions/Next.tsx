import React from "react";
import { QuestionProps } from ".";
import { INextQuestion } from "../../core/domain";
import * as Scaffold from "./Scaffold";

export const Next: React.FC<QuestionProps<INextQuestion>> = (props) => {

    return (
        <Scaffold.Wrapper>
            <Scaffold.Title {...props}/>
            <Scaffold.Footer>

            </Scaffold.Footer>
        </Scaffold.Wrapper>
    );
}
