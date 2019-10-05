import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './components/loading/loading';
import NotFound from './components/NotFound';
import Home from './views/home';

const Router = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/shell' component={Loading} exact />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
