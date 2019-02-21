import { TOGGLE_TODO } from './actionTypes';

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
