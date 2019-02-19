import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../store/actions/addTodoAction';

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add todo
      </button>
    </div>
  );
};

// When first parameter is not specified,
// connect will just inject 'dispatch' function as a prop
export default connect()(AddTodo);
