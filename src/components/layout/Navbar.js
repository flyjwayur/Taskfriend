import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Task Friend</Link>
        </li>
        <li>
          <Link to="/brainstorm">BrainStorm</Link>
        </li>
        <li>
          <Link to="/kanban">Kanban</Link>
        </li>
        <li>
          <Link to="/yourday">Your day</Link>
        </li>
        <li>
          <Link to="/signUp">Sign Up</Link>
        </li>
      </ul>
    );
  }
}

export default Navbar;
