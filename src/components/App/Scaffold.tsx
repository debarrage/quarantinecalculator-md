import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initDoneAction } from "../../store/actions";
import { Footer } from "./Footer";
import "./Scaffold.scss";

export const Scaffold: React.FC = (props) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initDoneAction());
    }, [dispatch]);

    return (
        <div className="app">
            <div className="app__body">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
};
