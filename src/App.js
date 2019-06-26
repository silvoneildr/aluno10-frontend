import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import configureStore from './store/configureStore';

import Routes from './routes';
import GlobalStype from './styles/global';
import theme from './styles/theme';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStype />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

export default App;
