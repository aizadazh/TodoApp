import React from 'react';
import PropTypes from 'prop-types';
import { submitTodo } from './AddTodo'

const TodoList = ({ todos, deleteTodo, submitTodo, inputChanged, disableAddTodo }) => {

  if (todos) {

    var todoItems = todos.map(todo => {
      let input;
      return (

        <li key={todo.id}>
          <span className="todo-text">
            {todo.text}
          </span>
          <button style={{ marginLeft: "10%" }}
            type="button"
            className="todo-delete"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
        </button>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              submitTodo(input.value);
              deleteTodo(todo.id)
            }}
          >
            <div>
              <input
                ref={(element) => {
                  input = element;
                }}
                onChange={() => inputChanged(input.value)}
                placeholder={todo.text}
              />
              <button
                type="submit"
                className="todo-submit"
                disabled={disableAddTodo}
              >
                edit
              </button>
            </div>

          </form>
        </li>

      )
    });
  }


  return (

    <ul>
      {todoItems}
    </ul>
  );
};


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  disableAddTodo: PropTypes.bool.isRequired,
  submitTodo: PropTypes.func.isRequired,

};




export default TodoList;