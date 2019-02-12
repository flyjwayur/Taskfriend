import React from 'react';
import Note from '../Note/index';
import Editable from '../Editable/index';

const Notes = ({ notes, onNoteClick, onEdit, onDelete }) => {
  return (
    <ul>
      {notes.map(({ id, editing, task }) => (
        <li key={id}>
          <Note onClick={() => onNoteClick(id)}>
            <Editable id={id} editing={editing} value={task} onEdit={onEdit} />
          </Note>
          <button type='button' onClick={e => onDelete(e, id)}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Notes;
