import { EDIT_NOTE } from './actionTypes';

export const editNote = (id, task) => {
  return {
    type: EDIT_NOTE,
    id,
    task
  };
};
