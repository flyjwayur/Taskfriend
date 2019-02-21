import { ADD_TASKNOTE } from './actionTypes';
import uuid from 'uuid';

export const addTaskNote = task => {
  return {
    type: ADD_TASKNOTE,
    id: uuid.v4(),
    task
  };
};
