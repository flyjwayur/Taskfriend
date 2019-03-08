import React, { useState } from 'react';
import { connect } from 'react-redux';

import Editable from '../Editable';
import LaneHeaderText from './LaneHeaderText/index';
import { editLaneName } from '../../store/actions/editLaneName';

import './styles.scss';

//React Hook
function LaneHeader({ id, name, onEditLaneName }) {
  const [editing, setEditing] = useState(false);

  function handleActivateEditing() {
    setEditing(true);
  }

  function handleDeactivateEditing() {
    setEditing(false);
  }

  return (
    <div className="laneHeader">
      <LaneHeaderText onClick={() => handleActivateEditing()}>
        <Editable
          className="laneHeader__text"
          value={name}
          id={id}
          onEdit={onEditLaneName}
          editing={editing}
          handleDeactivateEditing={handleDeactivateEditing}
        />
      </LaneHeaderText>
    </div>
  );
}

const mapDispatchToLaneHeaderProps = dispatch => {
  return {
    onEditLaneName: (id, name) => {
      dispatch(editLaneName(id, name));
    }
  };
};

export default connect(
  null,
  mapDispatchToLaneHeaderProps
)(LaneHeader);
