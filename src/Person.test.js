const Person = require("./Person");

describe("tests", () => {
    test("defaults", () => {
        expect(Person()).toMatchSnapshot();
    });

    test("with name", () => {
        expect(Person("Jane Doe")).toMatchSnapshot();
    });

    // test("with age", () => {
    //     expect(Person(undefined, 78)).toMatchSnapshot();
    // });
});