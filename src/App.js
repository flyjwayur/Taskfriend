import React, { Component } from 'react';
import Notes from './components/Notes/index';
import notes from './data/notes';

import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    notes,
  };

  addNote = () => {
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id: uuid.v4(),
          task: 'New task wow',
        },
      ],
    });
  };

  deleteNote = (id, e) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id),
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <button onClick={this.addNote}>+</button>
        <Notes notes={notes} onDelete={this.deleteNote} />
      </div>
    );
  }
}

export default App;
