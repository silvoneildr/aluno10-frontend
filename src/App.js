import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './routes';
import GlobalStype from './styles/global';

import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStype />
      <Routes />
    </BrowserRouter>
  </Provider>
);

export default App;
