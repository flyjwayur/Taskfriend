import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
