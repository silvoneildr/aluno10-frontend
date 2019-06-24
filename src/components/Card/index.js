import React from 'react';
import propTypes from 'prop-types';

import Box from './styles';

const Card = ({ children }) => <Box>{children}</Box>;

Card.propTypes = {
  children: propTypes.node.isRequired
};

export default Card;
