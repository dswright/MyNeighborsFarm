import React from 'react';
import { Redirect } from 'react-router';

const Authorized = ({ signedIn, children }) => {
  if (signedIn) {
    return <div>{children}</div>;
  }
  return <Redirect to='/log-in' />;
};

export default Authorized;
