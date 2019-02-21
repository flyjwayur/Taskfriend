import React, { Component } from 'react';
import Notes from './components/Notes/index';
import TodoApp from './components/TodoApp/index';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Notes />
        <TodoApp />
      </div>
    );
  }
}

export default App;
