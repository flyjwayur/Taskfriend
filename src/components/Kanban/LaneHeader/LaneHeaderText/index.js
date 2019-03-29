import React from 'react';
import './styles.scss';

const LaneHeaderText = ({ children, ...props }) => {
  return (
    <div className="laneHeaderText" {...props}>
      {children}
    </div>
  );
};

export default LaneHeaderText;
