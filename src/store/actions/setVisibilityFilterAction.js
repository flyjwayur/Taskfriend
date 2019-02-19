import { SET_VISIBILITY_FILTER } from './actionTypes';

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
