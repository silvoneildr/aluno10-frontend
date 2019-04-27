import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Welcome = lazy(() => import(/* webpackChunkName: "welcome-page" */ 'Pages/welcome'));

const routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/" component={Welcome} exact />
    </Switch>
  </Suspense>
);

export default routes;
