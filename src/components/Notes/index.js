import React from 'react';
import { connect } from 'react-redux';

import Note from '../Note/index';
import Editable from '../Editable/index';
import Button from '../Button/index';
import { deleteTaskNote } from '../../store/actions/deleteTaskNoteAction';
import { addTaskNote } from '../../store/actions/addTaskNoteAction';
import { activateEditTaskNote } from '../../store/actions/activateEditTaskNoteAction';

import './styles.scss';

const Notes = ({ taskNotes, onAddTaskNote, onActivateEditTaskNote, onDeleteTaskNote }) => {
  return (
    <ul className="notes">
      {taskNotes.map(({ id, editing, task }) => (
        <li className="notes__note" key={id}>
          <Note onClick={() => onActivateEditTaskNote(id)}>
            <Editable id={id} editing={editing} value={task} />
          </Note>
          <button type="button" onClick={() => onDeleteTaskNote(id)}>
            x
          </button>
        </li>
      ))}
      <Button
        type="button"
        label="+"
        size="md"
        onClick={() => onAddTaskNote('New task wow')}
        variant="outlined"
      />
    </ul>
  );
};

const mapStateToNotesProps = state => {
  return { taskNotes: state.taskNotes };
};

const mapDispatchToNotesProps = dispatch => {
  return {
    onAddTaskNote: task => {
      dispatch(addTaskNote(task));
    },
    onActivateEditTaskNote: id => {
      dispatch(activateEditTaskNote(id));
    },
    onDeleteTaskNote: id => {
      dispatch(deleteTaskNote(id));
    }
  };
};

export default connect(
  mapStateToNotesProps,
  mapDispatchToNotesProps
)(Notes);
