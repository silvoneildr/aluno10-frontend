import React, { Fragment } from 'react';
import Sidebar from 'Components/Sidebar';

import Container from './styles';

const Header = React.memo(() => (
  <Fragment>
    <Container>
      <h3>Aluno 10</h3>
      <h3>User</h3>
    </Container>
    <Sidebar />
  </Fragment>
));

export default function Home() {
  return <Header />;
}
