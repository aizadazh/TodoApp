import React from 'react';
import FormTodo from './FormTodo'

const TodoList = ({ todos, deleteTodo, inputChanged, editTodo, disableAddTodo, show}) => {
  
  if (todos) {
    var todoItems = todos.map(todo => {
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
        <button
          onClick={()=> show(todo.id)}
        >
          Edit
        </button>
            <FormTodo todo={todo} inputChanged={inputChanged} editTodo={editTodo} disableAddTodo={disableAddTodo} />
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






export default TodoList;