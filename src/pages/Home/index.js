import React, { Fragment } from 'react';
import Sidebar from 'Components/Sidebar';

import { HeaderContainer, Main, Content, Card, CardBody } from './styles';

const Header = React.memo(() => (
  <Fragment>
    <HeaderContainer>
      <h3>Aluno 10</h3>
      <h3>User</h3>
    </HeaderContainer>
    <Main>
      <Sidebar />
      <Content>
        <Card>
          <CardBody>
            <h2>567</h2>
            <p>Students</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h2>102</h2>
            <p>Subjects</p>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h2>79</h2>
            <p>Classes</p>
          </CardBody>
        </Card>
      </Content>
    </Main>
  </Fragment>
));

export default function Home() {
  return <Header />;
}
