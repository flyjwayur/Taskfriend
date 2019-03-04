import { FETCH_NOTE } from './actionTypes';

export const fetchNote = (id, notes) => {
  return {
    type: FETCH_NOTE,
    notes
  };
};
