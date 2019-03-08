import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoApp from './components/TodoApp';
import Lanes from './components/Lanes';
import Button from './components/Button';
import { addLane } from './store/actions/addLaneAction';

import './App.css';

class App extends Component {
  state = {
    editing: false
  };

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
          onClick={() => onAddLane('New Lane', [], this.state.editing)}
        />
        <Lanes />
        <TodoApp />
      </div>
    );
  }
}

const mapDispatchToLanesProps = dispatch => {
  return {
    onAddLane: (name, taskNotes, editing) => {
      dispatch(addLane(name, taskNotes, editing));
    }
  };
};

export default connect(
  null,
  mapDispatchToLanesProps
)(App);
