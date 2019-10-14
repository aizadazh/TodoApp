import React from 'react';
import FormTodo from './FormTodo'

const TodoList = ({ todos, deleteTodo, inputChanged, editTodo, disableAddTodo, show}) => {
  
  if (todos) {
    var todoItems = todos.map(todo => {
      return (  
        <li key={todo.id}>     
          <button
            type="button"
            className="todo-delete"
            onClick={() => deleteTodo(todo.id)}
          >Delete</button>
          <button
            className="todo-submit"
            onClick={()=> show(todo.id)}
          >
            Edit
          </button>
          
          <span className="todo-text">
            {todo.text}
          </span>
              <FormTodo todo={todo} inputChanged={inputChanged} editTodo={editTodo} disableAddTodo={disableAddTodo} />
        </li>

      )
    });
  }


  return (

    <ol>
      {todoItems}
    </ol>
  );
};






export default TodoList;