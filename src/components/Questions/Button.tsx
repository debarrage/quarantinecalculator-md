import React from "react";
import { usePreviousQuestion } from "./hooks/usePreviousQuestion";
import { useReset } from "./hooks/useReset";

type ButtonHandler = () =>  void;
type ButtonProps = { handler: ButtonHandler };
type GenericProps = ButtonProps & { name?: string };

export const Generic: React.FC<GenericProps> = (props) => {
    const className = props.name ? `buttons_${props.name}` : "";
    return (
        <div className={`buttons__button ${className}`} onClick={props.handler}>
            {props.children}
        </div>
    );
};

export const Previous: React.FC = () => {

    const previous = usePreviousQuestion();

    return (
        <Generic handler={previous} name="previous">
            <span className="button__text text">Vorige</span>
        </Generic>);
};

export const Next: React.FC<ButtonProps> = (props) => {
    return (
        <Generic handler={props.handler} name="next">
            <span className="button__text text">Volgende</span>
        </Generic>);
}

export const Reset: React.FC = () => {

    const reset = useReset();

    return (
        <Generic handler={reset} name="reset">
            <span className="button__text text">Opnieuw</span>
        </Generic>);
};
