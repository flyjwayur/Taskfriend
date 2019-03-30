import {
  FETCH_LANE,
  ADD_LANE,
  ATTACH_NOTE_TO_LANE,
  DETACH_NOTE_FROM_LANE,
  ACTIVATE_EDIT_LANE,
  EDIT_LANE_NAME,
  MOVE_NOTE_BETWEEN_LANES
} from '../actions/actionTypes';
import uuid from 'uuid';

export const fetchLane = notes => {
  return {
    type: FETCH_LANE,
    notes
  };
};

export const addLane = (name, notes) => {
  return {
    type: ADD_LANE,
    id: uuid.v4(),
    name,
    notes
  };
};

export const attachNoteToLane = (laneId, noteId) => {
  return {
    type: ATTACH_NOTE_TO_LANE,
    laneId,
    noteId
  };
};

export const detachNoteFromLane = (laneId, noteId) => {
  return {
    type: DETACH_NOTE_FROM_LANE,
    laneId,
    noteId
  };
};

export const activateEditLane = id => {
  return {
    type: ACTIVATE_EDIT_LANE,
    id
  };
};

export const editLaneName = (id, name) => {
  return {
    type: EDIT_LANE_NAME,
    id,
    name
  };
};

export const moveNoteBetweenLanes = (sourceId, targetId) => {
  return {
    type: MOVE_NOTE_BETWEEN_LANES,
    sourceId,
    targetId
  };
};
