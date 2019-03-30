import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../store/actions/todoActions';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          //Prevent from submitting empty input
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// When first parameter is not specified,
// connect will just inject 'dispatch' function as a prop
export default connect()(AddTodo);
