import React from 'react';
import Todo from '../Todo/index';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onToggleTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onToggleTodo(todo.id)} />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired
};

export default TodoList;
