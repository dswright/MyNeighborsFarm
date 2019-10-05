import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './views/not-found';
import Home from './views/home';

const Router = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
