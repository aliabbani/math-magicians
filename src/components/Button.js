import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const {
    content, onClick, name, className,
  } = props;
  return (
    <button type="button" name={name} onClick={onClick} className={className}>{content}</button>
  );
}

Button.propTypes = {
  content: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  className: propTypes.string.isRequired,
};

export default Button;
