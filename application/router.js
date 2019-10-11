import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './views/not-found';
import Home from './views/home';
import SignUp from './views/sign-up';
import LogIn from './views/log-in';
import ForgotPassword from './views/forgot-password';
import Dashboard from './views/dashboard';

const Router = () => (
  <Switch>
    <Route path='/' component={Home} exact />
    <Route path='/sign-up' component={SignUp} />
    <Route path='/log-in' component={LogIn} />
    <Route path='/dashboard' component={Dashboard} />
    <Route path='/forgot-password' component={ForgotPassword} />
    <Route component={NotFound} />
  </Switch>
);

export default Router;
