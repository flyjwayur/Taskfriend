import { DELETE_NOTE } from './actionTypes';

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    id
  };
};
