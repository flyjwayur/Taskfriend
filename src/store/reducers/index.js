import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './todoReducer';
import { taskNotes } from './taskNoteReducer';

export default combineReducers({
  todos,
  visibilityFilter,
  taskNotes
});
