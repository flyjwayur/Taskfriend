import React from 'react';
import ReactJson from 'react-json-view';

export const customInput = ({ label, input, type, placeholder, meta }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} type={type} placeholder={placeholder} />
      {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
      {/* Provide the state of redux-form field with 'meta' prop 
      <ReactJson src={meta} /> */}
    </div>
  );
};

export const customSelect = props => {
  return (
    <div>
      <label>{props.label}</label>
      <select {...props.input}>
        <option>Use as ..</option>
        <option value="personal">Personal project</option>
        <option value="team">Team project</option>
      </select>
      {/* <ReactJson src={props.meta} /> */}
    </div>
  );
};
