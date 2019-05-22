import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Wrapper } from '../index.stories';
import Button from '../../src/components/Button';

storiesOf('Components|Button', module).add('primary', () => (
  <Wrapper>
    <Button handleClick={action('clicked')} color="primary">
      Hello Button
    </Button>
  </Wrapper>
));

storiesOf('Components|Button', module).add('success', () => (
  <Wrapper>
    <Button handleClick={action('clicked')} color="success">
      Hello Button
    </Button>
  </Wrapper>
));

storiesOf('Components|Button', module).add('error', () => (
  <Wrapper>
    <Button handleClick={action('clicked')} color="error">
      Hello Button
    </Button>
  </Wrapper>
));
