import React from 'react';
import VisibleTodoList from '../VisibleTodoList/index';
import AddTodo from '../AddTodo/index';
import TodoFilterLinks from '../TodoFilterLinks/index';

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilterLinks />
  </div>
);

export default TodoApp;
