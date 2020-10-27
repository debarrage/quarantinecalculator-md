import React from "react";
import { useDispatch } from "react-redux";
import { previousQuestionAction } from "../../store/actions";

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

    const dispatch = useDispatch();
    const previous = () => {
        dispatch(previousQuestionAction());
    }

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
