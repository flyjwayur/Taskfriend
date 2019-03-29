import React from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import TodoFilterLinks from './TodoFilterLinks';

const TodoList = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <TodoFilterLinks />
  </div>
);

export default TodoList;
