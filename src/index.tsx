import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store";

const QuarantineCalculator: React.FC = () => (
    <Provider store={store}>
        <App.Scaffold>
            <App.Router/>
        </App.Scaffold>
    </Provider>
);

ReactDOM.render(<QuarantineCalculator />, window.document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
