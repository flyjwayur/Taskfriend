import { connect } from 'react-redux';
import TodoList from './TodoList';
import { toggleTodo } from '../../../store/actions/todoActions';
import { VisibilityFilters } from '../../../store/actions/todoActions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

const mapStateTodoListProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

const mapDispatchTodoListProps = dispatch => {
  return {
    onToggleTodo: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  mapStateTodoListProps,
  mapDispatchTodoListProps
)(TodoList);
