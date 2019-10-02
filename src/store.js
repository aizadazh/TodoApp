import { combineReducers, createStore } from 'redux';
import todos from './reducers/todos';

const reducers = combineReducers({
  todos,
});

export default createStore(reducers);