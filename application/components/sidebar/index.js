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

  updateSelectedFarm = async ({ target: { value } }) => {
    console.log('value', value);
    const { dispatch } = this.props;
    const patchedUser = await patchUser({ selectedFarmId: value });
    console.log('patchedUser', patchedUser.data);
    dispatch(updateUser(patchedUser.data));
  }

  render() {
    const { user } = this.props;
    return (
      <SidebarView
        user={user}
        switchView={this.switchView}
        updateSelectedFarm={this.updateSelectedFarm}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Sidebar));
