import { ADD_TODO, 
    SET_FILTER, 
    TOGGLE_TODO 
} 
    from "../redux/actionTypes";
import { addTodo, 
    toggleTodo, 
    setFilter 
} from "../redux/actions";

describe('Testing actionCreators', () =>{
    test('addTodo should create ADD_TODO action', () => {
        const text = "hello";
        const expectedAction= {
            type: ADD_TODO,
            payload: {
                id: 1,
                text
                }            
            }
        expect(addTodo(text)).toEqual(expectedAction)
    })
    test('setVisibilityFilter create SET_FILTER', () => {        
        const expectedAction = {
            type: SET_FILTER,
            payload: {
                filter: 'active'
            }
        }
        expect(setFilter("active")).toEqual(expectedAction)           
        })

    test('toggleTodo should create TOGGLE_TODO action', () => {
        const expectedAction = {
            type: TOGGLE_TODO,
            payload: {
                id: 1
            }           
        }
        expect(toggleTodo(1)).toEqual(expectedAction)
    })
})