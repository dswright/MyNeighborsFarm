import React from 'react';
import { connect } from 'react-redux';
import Authorized from '#application/components/authorized';
import Sidebar from '#application/components/sidebar';

const Dashboard = ({ user }) => (
  <Authorized signedIn={user.signedIn}>
    <Sidebar user={user}>
      <div>this is the dashboard</div>
    </Sidebar>
  </Authorized>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Dashboard);
