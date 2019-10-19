import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SidebarView from './view';
import { patchUser } from '#application/apis';
import { updateUser } from '#application/ducks/user';

class Sidebar extends Component {
  switchView = async () => {
    const {
      user: { farmView },
      dispatch
    } = this.props;

    const patchedUser = await patchUser({ farmView: !farmView });
    dispatch(updateUser(patchedUser.data));
  }

  render() {
    const { user } = this.props;
    return <SidebarView user={user} switchView={this.switchView} />;
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Sidebar));
