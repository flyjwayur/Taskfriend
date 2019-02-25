import React from 'react';
import { connect } from 'react-redux';

import Editable from '../Editable';
import { activateEditLane } from '../../store/actions/activateEditLaneAction';
import { editLaneName } from '../../store/actions/editLaneName';

import './styles.scss';

const LaneHeader = ({ lane, onActivateEditLane, onEditLaneName }) => {
  console.log('lane from header', lane.editing);
  const laneId = lane.id;
  return (
    <div className="lane__header" onClick={() => onActivateEditLane(laneId)}>
      <Editable
        className="lane__name"
        editing={lane.editing}
        value={lane.name}
        id={lane.id}
        onEdit={onEditLaneName}
      />
    </div>
  );
};

const mapDispatchToLaneHeaderProps = dispatch => {
  return {
    onActivateEditLane: id => {
      dispatch(activateEditLane(id));
    },
    onEditLaneName: (id, name) => {
      dispatch(editLaneName(id, name));
    }
  };
};

export default connect(
  null,
  mapDispatchToLaneHeaderProps
)(LaneHeader);
