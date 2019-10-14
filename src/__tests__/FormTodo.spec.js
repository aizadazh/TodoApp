import React from "react";
import { shallow, mount, configure } from "enzyme";
import FormTodo from "../components/FormTodo";
import Adapter from "enzyme-adapter-react-16";


configure({
    adapter: new Adapter()
});

describe('FormTodo component', ()=> {
    let component;
    let mountedComponent;
    const editMock = jest.fn();
    const changeMock = jest.fn();
    const props = {
       todo: {
           show: false,
       }
    }
    
    beforeEach(()=> {
        component = shallow(
            <FormTodo {...props}
                editTodo = {editMock}
                inputChanged = {changeMock}
                disableAddTodo
            />
        );
        mountedComponent = mount(
            <FormTodo {...props}
                editTodo = {editMock}
                inputChanged = {changeMock}
                disableAddTodo
            />,
        );
    });
    it('should render successfully', () => {
        expect(component.exists()).toEqual(true);        
    });
    it('Should have one input', () => {
        expect(component.find('.todo-input').length).toEqual(1);
      });

describe('Edit todo button', () => {
    it('Should exist', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call the submitTodo function when clicked', () => {
      expect(editMock.mock.calls.length).toEqual(0);
      mountedComponent.find('form').simulate('submit');
      expect(editMock.mock.calls.length).toEqual(1);
    });

    it('Should be disabled when there is no text in the input', () => {
      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(true);
    });

    it('Should not be disabled when there is text in the input', () => {
      component = shallow(
        <FormTodo
          editTodo={editMock}
          inputChanged = {changeMock}         
          disableAddTodo={false}
          
        />,
      );
      const disabled = component.find('.todo-submit').html().includes('disabled=""');

      expect(disabled).toEqual(false);
    });
  });
});
