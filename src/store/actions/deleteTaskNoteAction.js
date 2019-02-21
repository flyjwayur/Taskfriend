import { DELETE_TASKNOTE } from './actionTypes';

export const deleteTaskNote = id => {
  return {
    type: DELETE_TASKNOTE,
    id
  };
};
