import { FETCH_NOTE, ADD_NOTE, ACTIVATE_EDIT_NOTE, EDIT_NOTE, DELETE_NOTE } from './actionTypes';

export const fetchNote = (id, notes) => {
  return {
    type: FETCH_NOTE,
    notes
  };
};

export const addNote = (id, task, editing) => {
  return {
    type: ADD_NOTE,
    id,
    task,
    editing
  };
};

export const activateEditNote = id => {
  return {
    type: ACTIVATE_EDIT_NOTE,
    id
  };
};

export const editNote = (id, task) => {
  return {
    type: EDIT_NOTE,
    id,
    task
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    id
  };
};
