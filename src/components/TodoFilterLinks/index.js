import React from 'react';
import FilterLink from './FilterLink/index';

const TodoFilterLinks = () => {
  return (
    <p>
      <span>Show:</span>
      <FilterLink filter="SHOW_ALL">All</FilterLink>
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
      <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
    </p>
  );
};

export default TodoFilterLinks;
