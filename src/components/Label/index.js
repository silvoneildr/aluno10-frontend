import React from 'react';
import propTypes from 'prop-types';
import Span from './styles';

const Label = React.memo(({ children, ...rest }) => <Span {...rest}>{children}</Span>);

Label.propTypes = {
  children: propTypes.string.isRequired
};

export default Label;
