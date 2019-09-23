import React from "react";
import { shallow } from "enzyme";
import { AddTodo } from "../components/AddTodo";


describe('Testing AddTodo component', () => {
    test('it renders correctly', ()=> {
        shallow(<AddTodo />)
    })
    test('it renders input', () => {
        shallow(<input />)
    })
})