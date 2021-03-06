import React, { Component } from 'react';
import classNames from 'classnames';

import './styles.scss';

const Editable = ({ editing, id, value, className, onEdit }) => {
  if (editing) {
    return <Editable.Edit id={id} value={value} className={className} onEdit={onEdit} />;
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
    if (this.props.onEdit) {
      this.props.onEdit(this.props.id, value);
    }
  };

  render() {
    const { value, className } = this.props;

    return (
      <textarea
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        placeholder="Enter a title for this card"
        className={classNames('editable__edit', className)}
      />
    );
  }
}

Editable.Edit = Edit;

export default Editable;
