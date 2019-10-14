import types from "../actions/actionTypes";

export const initialState = {
  todos: [],
  deleted: {},
  edited: {},
  disableAddTodo: true,
  disableUndelete: true,
  text:''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SUBMIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
            show:'none',
          },
        ],
        disableAddTodo: true,
      };

    case types.EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          ...state.todos.filter(todo => {
            if (todo.id === action.id) { 
              {             
                todo.text = action.text
                todo.show = 'none'
              }                
              } 
          }),

        ],
      };
      case types.SHOW:
      return {
        ...state,
        todos: [
          ...state.todos,
          ...state.todos.filter(todo => {
            if (todo.id === action.id) {
                
                todo.show = 'block'
                  
            }
          }),

        ],
      };

    case types.DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => (
            todo.id !== action.id
          )),
        ],
        deleted: state.todos.filter(todo => todo.id === action.id)[0],
        disableUndelete: false,
      };


    case types.UNDELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          state.deleted,
        ],
        deleted: {},
        disableUndelete: true,
      };

    case types.INPUT_CHANGED:
      if (action.inputText) {
        return {
          ...state,
          disableAddTodo: false,
        };
      }
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;