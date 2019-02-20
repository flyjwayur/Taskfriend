import {
  FETCH_TASKNOTE,
  ADD_TASKNOTE,
  ACTIVATE_EDIT_TASKNOTE,
  EDIT_TASKNOTE,
  DELETE_TASKNOTE
} from '../actions/actionTypes';
import notes from '../../api/notes';

const initialTaskNoteState = notes;

export const taskNotes = (state = initialTaskNoteState, action) => {
  switch (action.type) {
    case FETCH_TASKNOTE:
      return [...state, action.taskNotes];
    case ADD_TASKNOTE:
      return [
        ...state,
        {
          id: action.id,
          task: action.task
        }
      ];
    case ACTIVATE_EDIT_TASKNOTE:
      return state.map(note => {
        if (note.id === action.id) {
          note.editing = true;
        }
        return note;
      });
    case EDIT_TASKNOTE:
      return state.map(note => {
        if (note.id === action.id) {
          note.editing = false;
          note.task = action.task;
        }
        return note;
      });
    case DELETE_TASKNOTE:
      const taskNoteId = action.id;
      //1st solution:
      const indexOfTaskNote = state.findIndex(taskNote => taskNote.id === taskNoteId);
      //2nd solution:
      // const taskNotesAfterDelete = state.filter(taskNote => taskNote.id !== taskNoteId);
      // return taskNotesAfterDelete;
      return [
        ...state.slice(0, indexOfTaskNote),
        ...state.slice(indexOfTaskNote + 1, state.length)
      ];
    default:
      return state;
  }
};
