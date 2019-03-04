import { ADD_LANE } from '../actions/actionTypes';
import uuid from 'uuid';

export const addLane = (name, notes) => {
  return {
    type: ADD_LANE,
    id: uuid.v4(),
    name,
    notes
  };
};
