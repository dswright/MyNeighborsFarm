import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Authorized from '#application/components/authorized';
import Sidebar from '#application/components/sidebar';
import NewFarm from '#application/views/dashboard/new-farm';
import FarmProducts from '#application/views/dashboard/farm-products';
import styles from './styles.scss';

const Dashboard = ({ user }) => (
  <Authorized signedIn={user.signedIn}>
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar user={user} />
      </div>
      <div className={styles.mainView}>
        <Switch>
          <Route path='/dashboard/new-farm' component={NewFarm} />
          <Route path='/dashboard/farm-products' component={FarmProducts} />
        </Switch>
      </div>
    </div>
  </Authorized>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Dashboard);
