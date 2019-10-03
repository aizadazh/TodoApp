import { combineReducers, createStore } from 'redux';
import todoListApp from './reducers/todos';

const reducers = combineReducers({
  todoListApp,
});

export default createStore(reducers);