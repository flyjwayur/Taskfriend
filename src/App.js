import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoApp from './components/TodoApp/index';
import Lanes from './components/Lanes/index';
import Button from './components/Button/index';
import { addLane } from './store/actions/addLaneAction';
import notes from './api/notes';

import './App.css';

class App extends Component {
  render() {
    const { onAddLane } = this.props;
    const taskNotesIds = notes.map(taskNote => taskNote.id);

    return (
      <div>
        <Button
          type="button"
          label="+"
          size="md"
          variant="outlined"
          onClick={() => onAddLane('New Lane', [])}
        >
          +
        </Button>
        <Lanes />
        <TodoApp />
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
)(App);
