import React from 'react';
import { connect } from 'react-redux';

import Notes from '../Notes';
import LaneHeader from '../LaneHeader';
import { deleteNote } from '../../store/actions/deleteNoteAction';
import { addNote } from '../../store/actions/addNoteAction';
import { editNote } from '../../store/actions/editNoteAction';
import { attachNoteToLane } from '../../store/actions/attachNoteToLaneAction';
import { detachNoteFromLane } from '../../store/actions/detachNoteFromLaneAction';

import './styles.scss';

const Lane = ({
  id,
  name,
  editing,
  laneNoteIds,
  notes,
  onAddNote,
  onEditNote,
  onDeleteNote,
  onAttachNoteToLane,
  onDetachNoteFromLane,
  ...props
}) => {
  return (
    <div {...props}>
      <LaneHeader id={id} name={name} editing={editing} />
      <Notes
        laneId={id}
        notes={filteredNotesById(notes, laneNoteIds)}
        onAddNote={onAddNote}
        onAttachNoteToLane={onAttachNoteToLane}
        onEditNote={onEditNote}
        onDeleteNote={onDeleteNote}
        onDetachNoteFromLane={onDetachNoteFromLane}
      />
    </div>
  );
};

function filteredNotesById(allNotes, noteIds = []) {
  // In tutorial
  //1) Solution 1
  // return noteIds.reduce(
  //   (notes, id) =>
  //     // Concatenate possible matching ids to the result
  //     notes.concat(allNotes.filter(note => note.id === id)),
  //   []
  // );
  //2) Solution 2
  const matchNotes = [];
  for (let i of allNotes) {
    for (let j of noteIds) {
      // Point : compare the element of obj in array with element in array
      if (i.id === j) {
        matchNotes.push(i);
      }
    }
  }
  return matchNotes;
}

const mapStateToNotesProps = state => {
  return { notes: state.notes };
};

const mapDispatchToNotesProps = dispatch => {
  return {
    onAddNote: (id, task, editing) => {
      dispatch(addNote(id, task, editing));
    },
    onEditNote: (id, task) => {
      dispatch(editNote(id, task));
    },
    onDeleteNote: id => {
      dispatch(deleteNote(id));
    },
    onAttachNoteToLane: (laneId, noteId) => {
      dispatch(attachNoteToLane(laneId, noteId));
    },
    onDetachNoteFromLane: (laneId, noteId) => {
      dispatch(detachNoteFromLane(laneId, noteId));
    }
  };
};

export default connect(
  mapStateToNotesProps,
  mapDispatchToNotesProps
)(Lane);
