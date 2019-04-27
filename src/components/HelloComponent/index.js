import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const HelloComponent = React.memo(({ text, userName, loading }) => (
  <Container>
    <h1>{text}</h1>
    <p>{loading ? 'Carregando...' : `Welcome: ${userName}`}</p>
  </Container>
));

HelloComponent.propTypes = {
  text: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default HelloComponent;
