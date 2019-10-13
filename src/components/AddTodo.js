import React from 'react';


const AddTodo = ({ submitTodo, undeleteTodo, inputChanged, disableAddTodo, disableUndelete }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = '';
        }}
      >

        <input
          className="todo-input"
          ref={(element) => {
            input = element;
          }}
          onChange={() => inputChanged(input.value)}
          placeholder="I'm going to..."
        />

        <button
          type="submit"
          className="todo-submit"
          disabled={disableAddTodo}
        >
          Add Todo
        </button>

        <button
          className="todo-undelete"
          onClick={() => undeleteTodo()}
          disabled={disableUndelete}
        >
          Undelete
        </button>

      </form>
    </div>
  );
};


export default AddTodo;