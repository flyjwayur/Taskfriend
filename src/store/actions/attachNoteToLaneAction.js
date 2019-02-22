import { ATTACH_NOTE_TO_LANE } from './actionTypes';

export const attachNoteToLane = (laneId, noteId) => {
  return {
    type: ATTACH_NOTE_TO_LANE,
    laneId,
    noteId
  };
};
