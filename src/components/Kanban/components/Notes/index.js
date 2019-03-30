import React from 'react';
import uuid from 'uuid';

import Note from '../Note';
import Editable from '../Editable';
import Button from '../../../UI/Button';

import './styles.scss';

const Notes = ({
  laneId,
  notes,
  onAddNote,
  onAttachNoteToLane,
  onActivateEditNote,
  onEditNote,
  onDeleteNote,
  onDetachNoteFromLane,
  onMoveNoteBetweenLanes
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
          <Note
            id={id}
            onClick={() => onActivateEditNote(id)}
            onMoveNoteBetweenLanes={onMoveNoteBetweenLanes}
          >
            <Editable id={id} editing={editing} value={task} onEdit={onEditNote} />
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
