import classNames from "classnames";
import React from "react";
import { QuestionProps } from ".";
import { IQuestion } from "../../core/domain";
import * as Buttons from "./Button";

export const Wrapper: React.FC<QuestionProps<IQuestion> & { className?: string }> = (props) => {

    const className = classNames(
        "question",
        `question__${props.question.type}`,
        `question__${props.question?.id}`,
        props.className
    );

    const id = `question__${props.question?.id}`;

    return (
        <div id={id} className={className}>
            <div className="question__wrapper">
                {props.children}
            </div>
        </div>
    )
};

export const Title: React.FC<QuestionProps<IQuestion>> = (props) => {
    return (
        <div className="question__title question__element">
            <h3 className="title__text">{props.question.title}</h3>
        </div>
    )
};

export const Body: React.FC = (props) => {
    return (
        <div className="question__body question__element">
            {props.children}
        </div>
    )
};

export const Footer: React.FC = (props) => {
    return (
        <div className="question__footer question__element">
            {props.children}
        </div>
    )
};

export const ButtonFooter: React.FC = (props) => {
    return (
        <Footer>
            <Buttons.Previous/>
            {props.children}
            <Buttons.Reset/>
        </Footer>
    );
}

export const NothingLoaded: React.FC = () => {
    return (
        <div className="question__notfound buttons">
        </div>
    )
};
