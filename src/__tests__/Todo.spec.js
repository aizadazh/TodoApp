import React from "react";
import { shallow } from "enzyme";
import { Todo } from "../components/Todo";

describe('Testing Todo Component', () => {
    const props = {
        todo: jest.fn(),
        toggleTodo: jest.fn()
    }
   
    const wrapper = shallow(<Todo {...props} />)
        it('renders correctly', ()=>{
            expect(wrapper).toMatchSnapshot();  
            expect(wrapper.find('li').hasClass('todo-item')).toBe(true);
        })
        it('handles onClick', () => {
            const onClick = jest.fn();
            const wrapper = shallow(<li onClick={onClick} />)
            wrapper.find('li').simulate('click')
            expect(onClick).toMatchSnapshot();
        }) 
    })       


