import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ type, label, shape, color, variant, size, onClick, className }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        'button',
        `button--${shape}`,
        `button--${color}`,
        `button--${variant}`,
        `button--${size}`,
        className
      )}
    >
      <span className="button__label"> {label} </span>
    </button>
  );
};

export default Button;
