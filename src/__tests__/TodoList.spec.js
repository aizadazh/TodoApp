import React from "react";
import { shallow } from "enzyme";
import { TodoList } from "../components/TodoList";

describe('Testing TodoLIst component', () => {
    test('it renders correctly', () => {
        shallow(<TodoList />)
    })
})