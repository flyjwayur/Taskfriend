import React from 'react';
import './styles.scss';

const Note = ({ children, ...props }) => {
  return (
    <div className="note" {...props}>
      {children}
    </div>
  );
};

export default Note;
