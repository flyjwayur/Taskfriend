import { ADD_NOTE, ACTIVATE_EDIT_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions/actionTypes';

// import notes from '../../api/notes';

const initialNoteState = [];

export const notes = (state = initialNoteState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          task: action.task
        }
      ];
    case ACTIVATE_EDIT_NOTE:
      console.log('activate edit');
      return state.map(note => {
        if (note.id === action.id) {
          note.editing = true;
          console.log('note.editing', note.editing);
        }
        return note;
      });
    case EDIT_NOTE:
      return state.map(note => {
        if (note.id === action.id) {
          note.editing = false;
          note.task = action.task;
        }
        return note;
      });
    case DELETE_NOTE:
      const noteId = action.id;
      //1st solution:
      const indexOfNote = state.findIndex(note => note.id === noteId);
      //2nd solution:
      // const notesAfterDelete = state.filter(note => note.id !== noteId);
      // return notesAfterDelete;
      return [...state.slice(0, indexOfNote), ...state.slice(indexOfNote + 1, state.length)];
    default:
      return state;
  }
};
