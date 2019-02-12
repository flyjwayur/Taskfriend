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

  deleteNote = (e, id) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id),
    });
  };

  activateNoteEdit = id => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = true;
        }
        return note;
      }),
    });
  };

  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      }),
    });
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <button type='button' onClick={this.addNote}>
          +
        </button>
        <Notes
          notes={notes}
          onNoteClick={this.activateNoteEdit}
          onEdit={this.editNote}
          onDelete={this.deleteNote}
        />
      </div>
    );
  }
}

export default App;
