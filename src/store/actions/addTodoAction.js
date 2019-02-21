import { ADD_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};
