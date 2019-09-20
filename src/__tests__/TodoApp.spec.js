import React from "react";
import { shallow } from "enzyme";
import TodoApp from ".././TodoApp";


describe('Testing TodoApp', () => {
    test('renders without crashing', () => {
        shallow(<TodoApp />);
    })
})