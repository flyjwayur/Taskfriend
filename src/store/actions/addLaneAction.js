import { ADD_LANE } from '../actions/actionTypes';
import uuid from 'uuid';

export const addLane = (name, notes, editing) => {
  return {
    type: ADD_LANE,
    id: uuid.v4(),
    name,
    notes,
    editing
  };
};
