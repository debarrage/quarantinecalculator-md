import { MarkGithubIcon } from "@primer/octicons-react";
import React from "react";
import "./Footer.scss";

/**
 * Footer component
 */
export const Footer: React.FC = () => {
    return (
        <div className="app__footer footer">
            <div className="footer__element--left">
                <a href="https://github.com/debarrage/quarantinecalculator-md" target="_blank" rel="noopener noreferrer">
                    <MarkGithubIcon/> 
                </a>
                <span>
                    v{process.env.REACT_APP_VERSION}
                </span>
            </div>
            <div className="footer__element--right">
                <a href="not-implemented">
                    Privacy
                </a>
            </div>
            <div className="footer__element--right">
                <a href="https://github.com/debarrage/quarantinecalculator-md/issues">
                    Probleem melden
                </a>
            </div>
        </div>
    );
}
