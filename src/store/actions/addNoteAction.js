import { ADD_NOTE } from './actionTypes';

export const addNote = (id, task, editing) => {
  return {
    type: ADD_NOTE,
    id,
    task,
    editing
  };
};
