import React, { useState } from 'react';
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
  onEditNote,
  onDeleteNote,
  onDetachNoteFromLane
}) => {
  const [editing, setEditing] = useState(false);

  function handleActivateEditing() {
    setEditing(true);
  }

  function handleDeactivateEditing() {
    setEditing(false);
  }

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
      {notes.map(({ id, task }) => (
        <li className="notes__note" key={id}>
          <Note handleActivateEditing={handleActivateEditing}>
            <Editable
              id={id}
              editing={editing}
              value={task}
              onEdit={onEditNote}
              handleDeactivateEditing={handleDeactivateEditing}
            />
          </Note>
          <button type="button" onClick={e => deleteAndDetachNoteFromLane(id, e)}>
            x
          </button>
        </li>
      ))}

      <Button
        type="button"
        label="+"
        shape="round"
        color="white"
        variant="outlined"
        size="md"
        onClick={e => addAndAttachItToLane(e)}
      />
    </ul>
  );
};

export default Notes;
