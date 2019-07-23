import React, { Fragment } from 'react';
import Sidebar from 'Components/Sidebar';

import { HeaderContainer, Main, Content, CardContent } from './styles';

const Header = React.memo(() => (
  <Fragment>
    <HeaderContainer>
      <h3>Aluno 10</h3>
      <h3>User</h3>
    </HeaderContainer>
    <Main>
      <Sidebar />
      <Content>
        <CardContent />
        <CardContent />
        <CardContent />
      </Content>
    </Main>
  </Fragment>
));

export default function Home() {
  return <Header />;
}
