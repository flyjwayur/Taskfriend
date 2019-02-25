import {
  ADD_LANE,
  ATTACH_NOTE_TO_LANE,
  DETACH_NOTE_FROM_LANE,
  ACTIVATE_EDIT_LANE,
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
    case DETACH_NOTE_FROM_LANE:
      return state.map(lane => {
        if (action.laneId === laneId) {
          lane.notes = lane.notes.filter(note => note !== action.noteId);
        }
        return lane;
      });
    case ACTIVATE_EDIT_LANE:
      return state.map(lane => {
        if (lane.id === action.id) {
          lane.editing = true;
          console.log('lane.editing', lane.editing);
        }
        return lane;
      });
    case EDIT_LANE_NAME:
      console.log('edit reducer');
      return state.map(lane => {
        if (lane.id === action.id) {
          lane.editing = false;
          lane.name = action.name;
          console.log('lane.editing', lane.editing, 'lane.name', lane.name);
        }
        return lane;
      });

    default:
      return state;
  }
};
