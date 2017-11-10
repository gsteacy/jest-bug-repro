import * as React from "react";
import * as renderer from 'react-test-renderer';

import Thing from "./Thing";

describe("tests", () => {
    test("defaults", () => {
        expect(render(<Thing />)).toMatchSnapshot();
    });

    test("class", () => {
        expect(render(<Thing className="a class" />)).toMatchSnapshot();
    });

    // test("children", () => {
    //     expect(render(<Thing><div /></Thing>)).toMatchSnapshot();
    // });
});

function render(component) {
    return renderer.create(component).toJSON();
}