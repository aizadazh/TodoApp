import React from 'react';
function FormTodo(props) {
    let input;
    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                props.editTodo(input.value, props.todo.id);
            }}
        >
            <div style={{display:props.todo.show}}>
                <input

                    ref={(element) => {
                        input = element;
                    }}
                    onChange={() => props.inputChanged(input.value)}
                    placeholder={props.todo.text}
                />
                <button
                    type="submit"
                    className="todo-submit"
                    disabled={props.disableAddTodo}
                >
                    edit
          </button>
            </div>

        </form>

    )

};


export default FormTodo;
