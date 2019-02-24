import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { editNote } from '../../store/actions/editNoteAction';

import './styles.scss';

const Editable = ({ editing, id, value, className, onEditNote }) => {
  if (editing) {
    return <Editable.Edit id={id} value={value} className={className} onEditNote={onEditNote} />;
  }
  return <Editable.Value className={className} value={value} />;
};

Editable.Value = ({ value, className }) => (
  <span className={classNames('editable__value', className)}>{value}</span>
);

class Edit extends Component {
  checkEnter = e => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  };

  finishEdit = e => {
    const value = e.target.value;
    if (this.props.onEditNote) {
      this.props.onEditNote(this.props.id, value);
    }
  };

  render() {
    const { value, className } = this.props;

    return (
      <input
        type="text"
        autoFocus
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        className={classNames('editable__edit', className)}
      />
    );
  }
}

Editable.Edit = Edit;

const mapDispatchToEditableProps = dispatch => {
  return {
    onEditNote: (id, task) => {
      dispatch(editNote(id, task));
    }
  };
};

export default connect(
  null,
  mapDispatchToEditableProps
)(Editable);
