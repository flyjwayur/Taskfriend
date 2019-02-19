import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList/index';
import { toggleTodo } from '../../store/actions/toggleTodoAction';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

class VisibleToDoList extends Component {
  render() {
    const { todos, onTodoClick } = this.props;
    return <TodoList todos={todos} onTodoClick={onTodoClick} />;
  }
}

const mapStateTodoListProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchTodoListProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  mapStateTodoListProps,
  mapDispatchTodoListProps
)(VisibleToDoList);
