import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Authorized from '#application/components/authorized';
import Sidebar from '#application/components/sidebar';
import NewFarm from '#application/views/dashboard/new-farm';

const Dashboard = ({ user }) => (
  <Authorized signedIn={user.signedIn}>
    <Sidebar user={user} />
    <Switch>
      <Route path='/dashboard/new-farm' component={NewFarm} />
    </Switch>
  </Authorized>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Dashboard);
