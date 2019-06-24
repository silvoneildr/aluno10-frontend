import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import styled, { ThemeProvider } from 'styled-components';
import propTypes from 'prop-types';
import GlobalStype from '../src/styles/global';
import theme from '../src/styles/theme';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const Style = styled.div`
  padding: 10px;
`;

export const Wrapper = ({ children }) => (
  <Style>
    <GlobalStype />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Style>
);

Wrapper.propTypes = {
  children: propTypes.node.isRequired
};
