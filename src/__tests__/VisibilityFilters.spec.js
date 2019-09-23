import reducer from "../redux/reducers/visibilityFilter";
import { VISIBILITY_FILTERS } from "../constants";
import { SET_FILTER } from "../redux/actionTypes";


describe('Testing VisibilityFilters component', () => {
   it('should return an initial state', () => {
        expect(reducer(undefined, {})).toEqual(VISIBILITY_FILTERS.ALL)
   })
   it('should handle Set_Filter action', () => {
        const completedState = VISIBILITY_FILTERS.COMPLETED;
        const action = {
            type: SET_FILTER,
            payload: {
                filter: 'completed'
            }            
        }
          expect(reducer(completedState, action)).toEqual(VISIBILITY_FILTERS.COMPLETED)
          
    })
})
           
                