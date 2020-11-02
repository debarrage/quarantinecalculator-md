import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initDoneAction } from "../../store/actions";
import { Footer } from "./Footer";
import { useWindowSize } from "./hooks/useWindowSize";
import "./Scaffold.scss";

export const Scaffold: React.FC = (props) => {
    
    const [width, height] = useWindowSize(0);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initDoneAction());
    }, [dispatch]);

    return (
        <div className="app" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="app__body">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
};
