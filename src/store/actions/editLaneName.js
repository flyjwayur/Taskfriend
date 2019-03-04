import { EDIT_LANE_NAME } from './actionTypes';

export const editLaneName = (id, name) => {
  return {
    type: EDIT_LANE_NAME,
    id,
    name
  };
};
