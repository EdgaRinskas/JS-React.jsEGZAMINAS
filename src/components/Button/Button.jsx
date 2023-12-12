import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, onClick, validateForm }) => {
  const handleClick = () => {
    if (validateForm()) {
      onClick();
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  validateForm: PropTypes.func.isRequired,
};

export default Button;
