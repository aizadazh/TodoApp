import { ADD_TODO, 
TOGGLE_TODO,
SET_VISIBILITY_FILTER,
SHOW_ALL,
SHOW_COMPLETED,
SHOW_ACTIVE }  from "./constants/actionTypes";

let nextTodoId = 0;
export const addTodo = text => ({
    type: ADD_TODO,
    id: nextTodoId++,
    text
})
export const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
})
export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const visibilityFilters = {
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
}