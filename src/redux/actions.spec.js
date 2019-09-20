import * as actions from "./index";
import { ADD_TODO, SET_FILTER, TOGGLE_TODO } from "./actionTypes";


test('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('hello')).toEqual({
        type: ADD_TODO,
        Id: 0,
        text: "hello"
    })
})
test('setVisibilityFilter create SET_VISIBILITY_FILTER', () => {
    expect(actions.setFilter('active')).toEqual({
        type: SET_FILTER,
        filter: 'active'
    })
})
test('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).toEqual({
        type: TOGGLE_TODO,
        Id: 1
    })
})