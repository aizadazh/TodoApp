import React from "react";
import { shallow } from "enzyme";
import { VisibilityFilters } from "../components/VisibilityFilters";

function setup() {
    const props = {
        activeFilter: jest.fn(),
        setFilter: jest.fn()
    }
    const wrapper = shallow(<VisibilityFilters {...props} />)
    return {
        props,
        wrapper
    }
}
    describe('TestingVisibilityFilters component', () =>{
        test('it renders correctly', () =>{
            const { wrapper } = setup()
            expect(wrapper.find('div').hasClass('visibility-filters')).toBe(true)
        
        })
    })
    describe('Testing span', () => {
        it('Test click event', () => {
            const setFilter = jest.fn();
        
            const span = shallow((<span onClick={setFilter} />));
            span.find('span').simulate('click');
            expect(setFilter).toHaveBeenCalled();
          });
    })