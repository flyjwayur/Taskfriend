import { ADD_NOTE } from './actionTypes';

export const addNote = (id, task) => {
  return {
    type: ADD_NOTE,
    id,
    task
  };
};
