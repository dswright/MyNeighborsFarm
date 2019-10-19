import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SidebarView from './view';
import { patchUser } from '#application/apis';
import { updateUser } from '#application/ducks/user';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      updatingSelectedFarm: false
    };
  }

  switchView = async () => {
    const {
      user: { farmView },
      dispatch
    } = this.props;

    const patchedUser = await patchUser({ farmView: !farmView });
    dispatch(updateUser(patchedUser.data));
  }

  updateSelectedFarm = async ({ target: { value } }) => {
    const { dispatch } = this.props;
    this.setState({ updatingSelectedFarm: true });
    const patchedUser = await patchUser({ selectedFarmId: value });

    setTimeout(() => {
      this.setState({ updatingSelectedFarm: false });
      dispatch(updateUser(patchedUser.data));
    }, 500);
  }

  render() {
    const { user } = this.props;
    const { updatingSelectedFarm } = this.state;
    return (
      <SidebarView
        user={user}
        switchView={this.switchView}
        updateSelectedFarm={this.updateSelectedFarm}
        updatingSelectedFarm={updatingSelectedFarm}
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default withRouter(connect(mapStateToProps)(Sidebar));
