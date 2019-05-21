import React from 'react';

import { storiesOf } from '@storybook/react';

import Card from '../../src/components/Card';

storiesOf('Components|Card', module).add('with text', () => <Card>Hello Button</Card>);

storiesOf('Components|Card', module).add('with p', () => (
  <Card>
    <p>Hello world</p>
  </Card>
));
