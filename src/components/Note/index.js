import React from 'react';
import './styles.scss';

const note = ({ children, ...props }) => {
  return (
    <div className="note" {...props}>
      {children}
    </div>
  );
};

export default note;
