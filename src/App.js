import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import GlobalStype from './styles/global';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStype />
      <Routes />
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
