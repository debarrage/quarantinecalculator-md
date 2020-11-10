import React from "react";
import renderer from "react-test-renderer";
import * as Button from "../Button";

describe("Button classes", () => { 
    it("Should render generic button", () => {
        // Act
        const tree = renderer.create(<Button.Generic name="test" handler={() => {}} />).toJSON();
    
        // Assert
        expect(tree).toMatchSnapshot();
    });
});
