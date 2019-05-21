import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStype from './styles/global';

const App = () => (
  <BrowserRouter>
    <GlobalStype />
    <Routes />
  </BrowserRouter>
);

export default App;
