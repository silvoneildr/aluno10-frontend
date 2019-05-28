import React from 'react';
import Container from './styles';

const Header = React.memo(() => (
  <Container>
    <h3>Aluno 10</h3>
    <h3>Silvonei</h3>
  </Container>
));

export default function Home() {
  return <Header />;
}
