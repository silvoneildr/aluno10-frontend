import React from 'react';
import propTypes from 'prop-types';

import StyleButton from './styles';

const Button = React.memo(({ children, onClick, ...rest }) => (
  <StyleButton onClick={onClick} {...rest}>
    {children}
  </StyleButton>
));

Button.propTypes = {
  children: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default Button;
