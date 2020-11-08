import { MarkGithubIcon } from "@primer/octicons-react";
import React from "react";
import "./Header.scss";

/**
 * Header component
 */
export const Header: React.FC = () => {
    return (
        <div className="app__header header">
            <div className="header__element--left">
                <a href="https://github.com/debarrage/quarantinecalculator-md" target="_blank" rel="noopener noreferrer">
                    <MarkGithubIcon/> 
                </a>
                <span>
                    v{process.env.REACT_APP_VERSION}
                </span>
            </div>
            <div className="header__element--right">
                <a href={process.env.REACT_APP_PRIVACY_URL}>
                    Privacy
                </a>
            </div>
            <div className="header__element--right">
                <a href={process.env.REACT_APP_ISSUE_URL}>
                    Probleem melden
                </a>
            </div>
        </div>
    );
}
