import React from 'react';

import { storiesOf } from '@storybook/react';

import { Wrapper } from '../index.stories';

import Card from '../../src/components/Card';

storiesOf('Components|Card', module).add('with text', () => (
  <Wrapper>
    <Card>Hello Button</Card>
  </Wrapper>
));

storiesOf('Components|Card', module).add('with p', () => (
  <Wrapper>
    <Card>
      <p>Hello world</p>
    </Card>
  </Wrapper>
));
