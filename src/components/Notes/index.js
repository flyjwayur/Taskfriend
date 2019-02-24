import React from 'react';
import uuid from 'uuid';

import Note from '../Note';
import Editable from '../Editable';
import Button from '../Button';

import './styles.scss';

const Notes = ({
  laneId,
  notes,
  onAddNote,
  onAttachNoteToLane,
  onActivateEditNote,
  onDeleteNote,
  onDetachNoteFromLane
}) => {
  const noteId = uuid.v4();
  const addAndAttachItToLane = e => {
    e.stopPropagation();
    onAddNote(noteId, 'New task wow');
    onAttachNoteToLane(laneId, noteId);
  };

  const deleteAndDetachNoteFromLane = (noteId, e) => {
    e.stopPropagation();
    onDeleteNote(noteId);
    onDetachNoteFromLane(laneId, noteId);
  };

  return (
    <ul className="notes">
      {notes.map(({ id, editing, task }) => (
        <li className="notes__note" key={id}>
          <Note onClick={() => onActivateEditNote(id)}>
            <Editable id={id} editing={editing} value={task} />
          </Note>
          <button type="button" onClick={e => deleteAndDetachNoteFromLane(id, e)}>
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
