import {
  ADD_LANE,
  ATTACH_NOTE_TO_LANE,
  DETACH_NOTE_FROM_LANE,
  EDIT_LANE_NAME
} from '../actions/actionTypes';

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
      //     name: action.name,
      //     notes: action.notes,
      //     editing: action.editing,
      //   }
      // ];
      //2nd solution:
      return state.concat([
        {
          id: action.id,
          name: action.name,
          notes: action.notes,
          editing: action.editing
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
    case DETACH_NOTE_FROM_LANE:
      return state.map(lane => {
        if (action.laneId === laneId) {
          lane.notes = lane.notes.filter(note => note !== action.noteId);
        }
        return lane;
      });
    case EDIT_LANE_NAME:
      return state.map(lane => {
        if (lane.id === action.id) {
          lane.name = action.name;
        }
        return lane;
      });

    default:
      return state;
  }
};
