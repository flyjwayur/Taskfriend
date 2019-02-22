import { ACTIVATE_EDIT_NOTE } from './actionTypes';

export const activateEditNote = id => {
  return {
    type: ACTIVATE_EDIT_NOTE,
    id
  };
};
