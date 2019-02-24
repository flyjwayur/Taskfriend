import { DETACH_NOTE_FROM_LANE } from './actionTypes';

export const detachNoteFromLane = (laneId, noteId) => {
  return {
    type: DETACH_NOTE_FROM_LANE,
    laneId,
    noteId
  };
};
