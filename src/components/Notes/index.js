import React from 'react';
import notes from '../../data/notes';

const Notes = () => {
  return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.task}</li>
      ))}
    </ul>
  );
};

export default Notes;
