import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

const SideBar = ({ show, toggleMenu }) => (
  <aside>
    <div className={classNames('mobile-menu', { 'mobile-menu--open': show })}>
      <div
        className="mobile-menu__close"
        onKeyPress={toggleMenu}
        tabIndex={-1}
        role="button"
        onClick={toggleMenu}
      />
      <div className="mobile-menu__links">
        <NavLink to="/brainstorm" className="mobile-menu__nav-link">
          BrainStorm
        </NavLink>
        <NavLink to="/kanban" className="mobile-menu__nav-link">
          Kanban
        </NavLink>
        <NavLink to="/yourday" className="mobile-menu__nav-link">
          Your day
        </NavLink>
        <NavLink to="/signup" className="mobile-menu__nav-link">
          Sign up
        </NavLink>
      </div>
    </div>
  </aside>
);

SideBar.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired
};

export default SideBar;
