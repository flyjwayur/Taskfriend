import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ label, type, onClick, color, size, className }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      onClick={onClick}
      className={classNames('button', `button--${color}`, `button--${size}`, className)}
    >
      <span className='button__label'> {label} </span>
    </button>
  );
};

export default Button;