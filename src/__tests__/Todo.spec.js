import React from "react";
import { shallow } from "enzyme";
import { Todo } from "../components/Todo";


function setup() {
    const props = {
        todo: jest.fn(),
        toggleTodo: jest.fn()
    }
    const wrapper = shallow(<Todo {...props} />)
    return {
        props,
        wrapper
    }
}

    describe('Testing Todo Component', () => {
        it('renders self and subcomponents', () =>{
            const { wrapper } = setup()
            expect(wrapper.find('li').hasClass('todo-item')).toBe(true)
        })       
    })   
