import { combineReducers } from 'redux';
import Todos from './Todos';
import VisibilityFilter from './VisibilityFilter';

export default combineReducers({
  Todos,
  VisibilityFilter
})