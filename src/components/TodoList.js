import React from 'react';
import PropTypes from 'prop-types';


const TodoList = ({ todos, deleteTodo, editTodo, inputChanged}) => {
if (todos) {
  var todoItems = todos.map(todo => {
  return ( 
      <li key={todo.id}>
        <span className="todo-text">
          {todo.text}
        </span>  
        <button style={{marginLeft: "10%"}}
          type="button"
          className="todo-delete"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
          
        <button
          type="button"
          className="todo-delete"
          onClick={() => (todo.id)}
        >
          Edit
        </button>
        <div style={{display: "block"}}>
          <input value={todo.text} onFocus={() => inputChanged(todo.inputText)}></input>
        </div>
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
  editTodo: PropTypes.func.isRequired,
  inputChanged: PropTypes.func.isRequired,
  
};

export default TodoList;