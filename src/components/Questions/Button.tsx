import React from "react";
import { useDispatch } from "react-redux";
import { previousQuestionAction } from "../../store/actions";

export const Generic: React.FC<{ handler: () => void, name?: string}> = (props) => {
    const className = props.name ? `buttons_${props.name}` : "";
    return (
        <div className={`buttons_button ${className}`} onClick={props.handler}>
            {props.children}
        </div>
    );
};

export const Previous: React.FC = () => {

    const dispatch = useDispatch();
    const previous = () => {
        dispatch(previousQuestionAction());
    }

    return (<Generic handler={previous} name="previous">Vorige</Generic>);
};
