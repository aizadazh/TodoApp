import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../TodoApp';
import { initialState } from '../reducers/todos';

it('App renders without crashing', () => {
  const mockFunction = jest.fn();

  const component = shallow(
    <App
      state={initialState}
      submitTodo={mockFunction}
      todos={[]}
      deleteTodo={mockFunction}
      undeleteTodo={mockFunction}
      inputChanged={mockFunction}
      disableAddTodo
      disableUndelete
    />,
  );

  expect(component.exists()).toEqual(true);
});