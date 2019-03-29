import React from 'react';
import { connect } from 'react-redux';

import Editable from '../Editable';
import LaneHeaderText from './LaneHeaderText';
import { activateEditLane } from '../../../store/actions/activateEditLaneAction'
import { editLaneName } from '../../../store/actions/editLaneName';

import './styles.scss';

const LaneHeader = ({ id, name, editing, onActivateEditLane, onEditLaneName }) => {
  return (
    <div className="laneHeader" onClick={() => onActivateEditLane(id)}>
      <LaneHeaderText>
        <Editable
          className="laneHeader__text"
          editing={editing}
          value={name}
          id={id}
          onEdit={onEditLaneName}
        />
      </LaneHeaderText>
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
