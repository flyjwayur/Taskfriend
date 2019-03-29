import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const MenuBar = ({ toggleMenu }) => (
  <nav className="navbar">
    <div className="navbar__logo">
      <NavLink to="/" className="navbar__logo__link">
        Task Friend
      </NavLink>
    </div>
    <ul className="navbar__links">
      <li>
        <NavLink
          to="/brainstorm"
          className="navbar__nav-link"
          activeClassName="navbar__nav-link--active"
        >
          BrainStorm
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/kanban"
          className="navbar__nav-link"
          activeClassName="navbar__nav-link--active"
        >
          Kanban
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/yourday"
          className="navbar__nav-link"
          activeClassName="navbar__nav-link--active"
        >
          Your day
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/signup"
          className="navbar__nav-link"
          activeClassName="navbar__nav-link--active"
        >
          Sign Up
        </NavLink>
      </li>
    </ul>
    <div
      role="button"
      onKeyPress={toggleMenu}
      onClick={toggleMenu}
      className="mobile-menu__button navbar__menu"
      tabIndex="-1"
    >
      &#9776;
    </div>
  </nav>
);

MenuBar.propTypes = {
  toggleMenu: PropTypes.func.isRequired
};

export default MenuBar;
