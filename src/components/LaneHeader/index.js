import React from 'react';

const LaneHeader = ({ lane }) => {
  return (
    <div className="lane__header">
      <div className="lane__name">{lane.name}</div>
    </div>
  );
};

export default LaneHeader;
