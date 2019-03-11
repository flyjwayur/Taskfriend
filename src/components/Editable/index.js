import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Editable = ({ editing, id, value, className, onEdit, handleDeactivateEditing }) => {
  if (editing) {
    return (
      <Editable.Edit
        id={id}
        value={value}
        className={className}
        onEdit={onEdit}
        handleDeactivateEditing={handleDeactivateEditing}
      />
    );
  }
  return <Editable.Value className={className} value={value} />;
};

Editable.Value = ({ value, className }) => (
  <span className={classNames('editable__value', className)}>{value}</span>
);

function Edit({ id, value, className, onEdit, handleDeactivateEditing }) {
  function finishEdit(e) {
    const value = e.target.value;

    if (onEdit) {
      handleDeactivateEditing();
      onEdit(id, value);
    }
  }

  function checkEnter(e) {
    if (e.key === 'Enter') {
      finishEdit(e);
    }
  }

  return (
    <textarea
      type="text"
      autoFocus
      defaultValue={value}
      onBlur={finishEdit}
      onKeyPress={checkEnter}
      className={classNames('editable__edit', className)}
      placeholder="Enter a title for this card..."
    />
  );
}

Editable.Edit = Edit;

export default Editable;
