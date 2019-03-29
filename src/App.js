import React, { Component } from 'react';

import TodoApp from './components/TodoApp';
import Kanban from './components/Kanban';
import SignUp from './components/SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Kanban />
        <TodoApp />
        <SignUp />
      </div>
    );
  }
}

export default App;
