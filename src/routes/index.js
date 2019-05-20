import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Login = lazy(() => import(/* webpackChunkName: "welcome-page" */ 'Pages/Login'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" component={Login} exact />
    </Switch>
  </Suspense>
);

export default routes;
