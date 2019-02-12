import React from 'react';

const note = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};

export default note;
