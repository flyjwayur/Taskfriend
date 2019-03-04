import { FETCH_LANE } from './actionTypes';

export const fetchLane = notes => {
  return {
    type: FETCH_LANE,
    notes
  };
};
