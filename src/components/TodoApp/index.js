import React from 'react';
import VisibleTodoList from '../VisibleTodoList';
import AddTodo from '../AddTodo';
import TodoFilterLinks from '../TodoFilterLinks';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilterLinks />
  </div>
);

export default TodoApp;
