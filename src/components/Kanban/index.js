import React, { Component } from 'react';
import { connect } from 'react-redux';

import Lanes from './Lanes';
import Button from '../UI/Button';
import { addLane } from '../../store/actions/addLaneAction';

class Kanban extends Component {
  render() {
    const { onAddLane } = this.props;

    return (
      <div>
        <Button
          type="button"
          label="+ Add new lane"
          shape="square"
          color="primary"
          variant="outlined"
          size="md"
          onClick={() => onAddLane('New Lane', [])}
        />
        <Lanes />
      </div>
    );
  }
}

const mapDispatchToLanesProps = dispatch => {
  return {
    onAddLane: (name, taskNotes) => {
      dispatch(addLane(name, taskNotes));
    }
  };
};

export default connect(
  null,
  mapDispatchToLanesProps
)(Kanban);
