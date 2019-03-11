import React from 'react';
import './styles.scss';

const note = ({ children, handleActivateEditing, ...props }) => {
  return (
    <div className="note" {...props} onClick={() => handleActivateEditing()}>
      {children}
    </div>
  );
};

export default note;
