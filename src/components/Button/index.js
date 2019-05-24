import React from 'react';
import propTypes from 'prop-types';

import StyleButton from './styles';

const Button = React.memo(({ children, handleClick, ...rest }) => (
  <StyleButton onClick={handleClick} {...rest}>
    {children}
  </StyleButton>
));

Button.propTypes = {
  children: propTypes.string.isRequired,
  handleClick: propTypes.func.isRequired
};

export default Button;
