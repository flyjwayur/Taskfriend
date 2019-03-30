import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Lanes from './components/Lanes';
import Button from '../UI/Button';
import { addLane } from '../../store/actions/laneActions';

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

export default compose(
  DragDropContext(HTML5Backend),
  connect(
    null,
    mapDispatchToLanesProps
  )
)(Kanban);
