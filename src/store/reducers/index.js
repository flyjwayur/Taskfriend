import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './todoReducer';

export default combineReducers({
  todos,
  visibilityFilter
});
