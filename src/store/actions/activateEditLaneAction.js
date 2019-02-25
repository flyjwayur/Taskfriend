import { ACTIVATE_EDIT_LANE } from './actionTypes';

export const activateEditLane = id => {
  return {
    type: ACTIVATE_EDIT_LANE,
    id
  };
};
