import { createStore, Store } from "@reduxjs/toolkit";
import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { Header } from "../Header";
import { Layout } from "../Layout";

const ReduxProvider: React.FC<{store: Store}> = (props) => (
    <Provider store={props.store}>{props.children}</Provider>
)

describe("Base Layout classes", () => {
    it("Renders layout", () => {
        // Arrange
        const store = createStore(state => state);
    
        // Act
        const tree = renderer.create(<ReduxProvider store={store}><Layout/></ReduxProvider>).toJSON();
    
        // Assert
        expect(tree).toMatchSnapshot();
    });
    
    it("Renders footer", () => {
        // Arrange
        const store = createStore(state => state);
    
        // Act
        const tree = renderer.create(<ReduxProvider store={store}><Header/></ReduxProvider>).toJSON();
    
        // Assert
        expect(tree).toMatchSnapshot();
    });
});
