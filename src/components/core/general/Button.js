import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ imageClass, icon, handleClick, name }) => {
  const handleClickEvent = (event) => {
    event.preventDefault();
    handleClick();
  };

  return (
    <button
      className="icon-button"
      onClick={handleClickEvent}
    >
      <img src={icon} className={imageClass} alt={name} />
    </button>
  );
};

Button.propTypes = {
  imageClass: PropTypes.string,
  icon: PropTypes.string,
  handleClick: PropTypes.func,
  name: PropTypes.string,
};

export default Button;
