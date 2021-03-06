import classNames from "classnames";
import React from "react";
import { QuestionProps } from ".";
import { IQuestion } from "../../core/domain";
import * as Buttons from "./Button";
import "./Question.scss";

type ClassNameProps = { className?: string };
type DefaultProps = QuestionProps<IQuestion>;

export const Wrapper: React.FC<Partial<DefaultProps> & ClassNameProps> = (props) => {

    const className = classNames(
        "question",
        `question__${props.question?.type || "unknown"}`,
        `question__${props.question?.id || "unknown"}`,
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

export const Title: React.FC<DefaultProps> = (props) => {
    return (
        <div className="question__title question__element">
            <h3 className="title__text animate__animated animate__fadeInRight">{props.question.title}</h3>
        </div>
    )
};

export const Body: React.FC<ClassNameProps> = (props) => {
    return (
        <div className={classNames("question__body", "question__element", props.className)}>
            {props.children}
        </div>
    )
};

export const Footer: React.FC = (props) => {
    return (
        <div className="question__footer buttons question__element">
            {props.children}
        </div>
    )
};

export const ButtonFooter: React.FC = (props) => {
    return (
        <Footer>
            <div className="buttons__main">
                <Buttons.Previous/>
                {props.children}
            </div>
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
