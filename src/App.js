import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoApp from './components/TodoApp';
import Lanes from './components/Lanes';
import Button from './components/Button';
import { addLane } from './store/actions/addLaneAction';
import SignUp from './components/SignUp';

import './App.css';

class App extends Component {
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
        <TodoApp />
        <SignUp />
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
