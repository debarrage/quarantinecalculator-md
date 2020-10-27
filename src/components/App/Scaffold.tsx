import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initDoneAction } from "../../store/actions";
import "./Scaffold.scss";

export const Scaffold: React.FC = (props) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initDoneAction());
    }, [dispatch]);

    return (
        <div className="app">
            {props.children}
        </div>
    )
};
