import { FETCH_NOTE } from './actionTypes';
import taskNotes from '../../api/notes';

export const fetchNote = () => {
  return {
    type: FETCH_NOTE,
    taskNotes
  };
};
