import React from 'react';
import { connect } from 'react-redux';

import Notes from '../Notes';
import LaneHeader from '../LaneHeader';
import { deleteNote } from '../../store/actions/deleteNoteAction';
import { addNote } from '../../store/actions/addNoteAction';
import { activateEditNote } from '../../store/actions/activateEditNoteAction';
import { attachNoteToLane } from '../../store/actions/attachNoteToLaneAction';
import { detachNoteFromLane } from '../../store/actions/detachNoteFromLaneAction';

const Lane = ({
  lane,
  notes,
  onAddNote,
  onActivateEditNote,
  onDeleteNote,
  onAttachNoteToLane,
  onDetachNoteFromLane,
  ...props
}) => {
  return (
    <div {...props}>
      <LaneHeader lane={lane} />
      <Notes
        laneId={lane.id}
        notes={filteredNotesById(notes, lane.notes)}
        onAddNote={onAddNote}
        onAttachNoteToLane={onAttachNoteToLane}
        onActivateEditNote={onActivateEditNote}
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
    onAddNote: (id, task) => {
      dispatch(addNote(id, task));
    },
    onActivateEditNote: id => {
      dispatch(activateEditNote(id));
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
