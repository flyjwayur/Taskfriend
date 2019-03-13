import { combineReducers } from 'redux';
import { todos, visibilityFilter } from './todoReducer';
import { notes } from './taskNoteReducer';
import { lanes } from './lanesReducer';
import { reducer as form } from 'redux-form';

export default combineReducers({
  todos,
  visibilityFilter,
  notes,
  lanes,
  form
});
