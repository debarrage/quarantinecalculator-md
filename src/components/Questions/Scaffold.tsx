import React from "react";
import { QuestionProps } from ".";
import { IQuestion } from "../../core/domain";

export const Wrapper: React.FC<{ className?: string }> = (props) => {
    return (
        <div className={`questions question ${props.className}`}>
            <div className="question__wrapper">
                {props.children}
            </div>
        </div>
    )
};

export const Title: React.FC<QuestionProps<IQuestion>> = (props) => {
    return (
        <div className="question__title question_element">
            <h3 className="title__text">{props.question.title}</h3>
        </div>
    )
};

export const Body: React.FC = (props) => {
    return (
        <div className="question__body question_element">
            {props.children}
        </div>
    )
};

export const Footer: React.FC = (props) => {
    return (
        <div className="question__footer question_element">
            {props.children}
        </div>
    )
};

export const NothingLoaded: React.FC = () => {
    return (
        <div className="question__notfound buttons">
        </div>
    )
};
