import { ACTIVATE_EDIT_TASKNOTE } from './actionTypes';

export const activateEditTaskNote = id => {
  return {
    type: ACTIVATE_EDIT_TASKNOTE,
    id
  };
};
