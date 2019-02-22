import { ADD_LANE, ATTACH_NOTE_TO_LANE } from '../actions/actionTypes';

const initialLanesState = [];

export const lanes = (state = initialLanesState, action) => {
  switch (action.type) {
    case ADD_LANE:
      //1st solution:
      // return [
      //   ...state,
      //   //Add Lane
      //   {
      //     id: action.id,
      //     name: action.name
      //   }
      // ];
      //2nd solution:
      return state.concat([
        {
          id: action.id,
          name: action.name,
          notes: action.notes
        }
      ]);
    case ATTACH_NOTE_TO_LANE:
      const noteId = action.noteId;
      const laneId = action.laneId;
      return state.map(lane => {
        if (lane.notes.includes(noteId)) {
          lane.notes = lane.notes.filter(note => note !== noteId);
        }
        if (lane.id === laneId) {
          lane.notes = lane.notes.concat([noteId]);
        }
        return lane;
      });
    default:
      return state;
  }
};
