import { EDIT_TASKNOTE } from './actionTypes';

export const editTaskNote = (id, task) => {
  return {
    type: EDIT_TASKNOTE,
    id,
    task
  };
};
