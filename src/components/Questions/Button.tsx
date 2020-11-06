import { ChevronLeftIcon, ChevronRightIcon, SyncIcon } from "@primer/octicons-react";
import classNames from "classnames";
import React from "react";
import "./Button.scss";
import { useIsEmptyPath } from "./hooks/useIsEmptyPath";
import { usePreviousQuestion } from "./hooks/usePreviousQuestion";
import { useReset } from "./hooks/useReset";

type ButtonHandler = () =>  void;
type ButtonProps = { handler: ButtonHandler, className?: string, disabled?: boolean };
type GenericProps = ButtonProps & { name?: string };

export const Generic: React.FC<GenericProps> = (props) => {
    const className = classNames(
        "buttons__button",
        { "buttons__button--disabled": props.disabled },
        props.name && `buttons__${props.name}`, 
        props.className);
        
    return (
        <div className={className} onClick={props.handler}>
            {props.children}
        </div>
    );
};

export const Previous: React.FC = () => {

    const previous = usePreviousQuestion();
    const emptyPath = useIsEmptyPath();

    return (
        <Generic handler={previous} name="previous" disabled={emptyPath}>
            <span className="button__text text">
                <ChevronLeftIcon size="large" verticalAlign="middle" />
                Vorige
            </span>
        </Generic>);
};

export const Next: React.FC<ButtonProps> = (props) => {
    return (
        <Generic handler={props.handler} name="next">
            <span className="button__text text">
                Volgende
                <ChevronRightIcon size="large" verticalAlign="middle" />
            </span>
        </Generic>);
}

export const Reset: React.FC = () => {

    const reset = useReset();

    return (
        <Generic handler={reset} name="reset">
            <span className="button__text text">
                <SyncIcon size="large" verticalAlign="middle" />
            </span>
        </Generic>);
};
