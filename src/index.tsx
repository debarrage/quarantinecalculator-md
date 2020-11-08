import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as App from "./components/App";
import { initStore } from "./store";
import { initializeTelemetry } from "./telemetry";

const QuarantineCalculator: React.FC = () => {
    const store = initStore();
    
    return (
        <Provider store={store}>
            <App.Layout>
                <App.Router/>
            </App.Layout>
        </Provider>);
};

ReactDOM.render(<QuarantineCalculator />, window.document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();

// Initialize telemetry
initializeTelemetry();
