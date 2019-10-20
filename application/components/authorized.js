import React, { Fragment } from 'react';
import { Redirect } from 'react-router';

const Authorized = ({ signedIn, children }) => {
  if (signedIn) {
    return <Fragment>{children}</Fragment>;
  }
  return <Redirect to='/log-in' />;
};

export default Authorized;
