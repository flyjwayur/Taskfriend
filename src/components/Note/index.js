import React from 'react';

const note = ({ task, onDelete }) => {
  return (
    <div>
      <span>{task}</span>
      <button onClick={onDelete}>x</button>
    </div>
  );
};

export default note;
