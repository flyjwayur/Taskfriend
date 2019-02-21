import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span> {children}</span>;
  }
  return (
    <button
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      style={{ marginLeft: '4px' }}
      disabled={active}
    >
      {children}
    </button>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
