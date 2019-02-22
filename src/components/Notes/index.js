import React from 'react';
import uuid from 'uuid';

import Note from '../Note/index';
import Editable from '../Editable/index';
import Button from '../Button/index';

import './styles.scss';

const Notes = ({
  laneId,
  notes,
  onAddNote,
  onAttachNoteToLane,
  onActivateEditNote,
  onDeleteNote
}) => {
  const noteId = uuid.v4();
  const addAndAttachItToLane = e => {
    e.stopPropagation();
    onAddNote(noteId, 'New task wow');
    onAttachNoteToLane(laneId, noteId);
  };

  return (
    <ul className="notes">
      {notes.map(({ id, editing, task }) => (
        <li className="notes__note" key={id}>
          <Note onClick={() => onActivateEditNote(id)}>
            <Editable id={id} editing={editing} value={task} />
          </Note>
          <button type="button" onClick={() => onDeleteNote(id)}>
            x
          </button>
        </li>
      ))}
      <Button
        type="button"
        label="+"
        size="md"
        onClick={e => addAndAttachItToLane(e)}
        variant="outlined"
      />
    </ul>
  );
};

export default Notes;
