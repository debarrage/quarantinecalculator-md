import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initDoneAction } from "../../store/actions";
import { Header } from "./Header";
import { useWindowSize } from "./hooks/useWindowSize";
import "./Layout.scss";

/**
 * App layout component. It uses the window size to set a fixed
 * height and width of the component.
 * 
 * @param props 
 */
export const Layout: React.FC = (props) => {
    
    const [width, height] = useWindowSize();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(initDoneAction());
    }, [dispatch]);

    return (
        <div className="app" style={{ width: `${width}px`, height: `${height}px` }}>
            <Header/>
            <div className="app__body">
                {props.children}
            </div>
        </div>
    )
};
