import React from 'react';
import ReactJson from 'react-json-view';
import classNames from 'classnames';
import './styles.scss';

const getValidityClassName = meta => {
  //When a user type, no style
  if (meta.active) {
    return;
  }
  if (meta.touched && meta.invalid) {
    return 'customInput__invalid';
  }
  if (meta.touched && meta.valid) {
    return 'customInput__valid';
  }
};

export const customInput = ({ label, input, type, placeholder, meta }) => {
  return (
    <div
      className={classNames(
        'customInput',
        { 'customInput__flex-row-reverse': type === 'checkbox' },
        { 'customInput__input-dirty': meta.dirty },
        getValidityClassName(meta)
      )}
    >
      <input className="customInput__input" {...input} type={type} placeholder={placeholder} />
      <label className="customInput__label">{label}</label>
      {meta.error && meta.touched && !meta.active && (
        <div className="customInput__error-text">{meta.error}</div>
      )}
      {/* Provide the state of redux-form field with 'meta' prop 
      <ReactJson src={meta} /> */}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div className="customSelect">
      <label className="customSelect__label">{props.label}</label>
      <select className="customSelect__select" {...props.input}>
        <option>Use as ..</option>
        <option value="personal">Personal project</option>
        <option value="team">Team project</option>
      </select>
      {/* <ReactJson src={props.meta} /> */}
    </div>
  );
};
