import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from 'Components/ErrorBoundary';

const Login = lazy(() => import(/* webpackChunkName: "welcome-page" */ 'Pages/Login'));
const Home = lazy(() => import(/* webpackChunkName: "welcome-page" */ 'Pages/Home'));

const routes = () => (
  <ErrorBoundary>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default routes;
