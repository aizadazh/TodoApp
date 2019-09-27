import React from "react";
import { shallow } from "enzyme";
import { AddTodo } from "../components/AddTodo";



describe('Testing AddTodo component', () => {
    let wrapper 
    beforeEach(() => {
        wrapper = shallow(<AddTodo />);
      });
    test('it has the initial state an empty string', () => {

        expect(wrapper.state()).toEqual({ input: "" })
        wrapper.setState({ input: "hello" });
        
        expect(wrapper.find(".hello").lengths).toBe(undefined);
    });    
})