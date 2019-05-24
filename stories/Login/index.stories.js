import React from 'react';

import { storiesOf } from '@storybook/react';

import Login from 'Pages/Login';
import { Wrapper } from '../index.stories';

storiesOf('Pages|Login', module).add('Screen', () => (
  <Wrapper>
    <Login />
  </Wrapper>
));
