import React from 'react';

//Presentational Component
// What todo component needs to render by destructuring props right away
const Todo = ({ onClick, completed, text }) => {
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
  );
};

export default Todo;
