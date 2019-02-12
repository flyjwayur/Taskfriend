import React from 'react';
import Note from '../Note/index';

const Notes = ({ notes, onDelete }) => {
  return (
    <ul>
      {notes.map(({ id, task }) => (
        <li key={id}>
          <Note>
            <span>{task}</span>
            <button type='button' onClick={e => onDelete(id, e)}>
              x
            </button>
          </Note>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
