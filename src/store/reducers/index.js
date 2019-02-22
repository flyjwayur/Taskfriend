import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './todoReducer';
import { notes } from './taskNoteReducer';
import { lanes } from './lanesReducer';

export default combineReducers({
  todos,
  visibilityFilter,
  notes,
  lanes
});
