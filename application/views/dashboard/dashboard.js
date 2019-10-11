import React from 'react';
import { connect } from 'react-redux';
import Authorized from '#application/components/authorized';

const Dashboard = ({ user }) => (
  <Authorized signedIn={user.signedIn}>
    <div>this is the dashboard</div>
  </Authorized>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Dashboard);
