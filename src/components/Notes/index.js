import React from 'react';
import Note from '../Note/index';

const Notes = ({ notes, onDelete }) => {
  return (
    <ul>
      {notes.map(({ id, task }) => (
        <li key={id}>
          <Note task={task} onDelete={e => onDelete(id, e)} />
        </li>
      ))}
    </ul>
  );
};

export default Notes;
