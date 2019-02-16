
import React, { Component } from "react";
import classNames from "classnames";
import "./styles.scss";

const Editable = ({ editing, value, onEdit, className, ...props }) => {
  if (editing) {
    return (
      <Editable.Edit
        value={value}
        onEdit={onEdit}
        className={className}
        {...props}
      />
    );
  }
  return <Editable.Value className={className} value={value} />;
};

Editable.Value = ({ value, className, ...props }) => (
  <span className={classNames("editable__value", className)} {...props}>
    {value}
  </span>
);

class Edit extends Component {
  checkEnter = e => {
    if (e.key === "Enter") {
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
    const { value, onEdit, className, ...props } = this.props;

    return (
      <input
        type="text"
        autoFocus
        defaultValue={value}
        onBlur={this.finishEdit}
        onKeyPress={this.checkEnter}
        className={classNames("editable__edit", className)}
        {...props}
      />
    );
  }
}

Editable.Edit = Edit;

export default Editable;
