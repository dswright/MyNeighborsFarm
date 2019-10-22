import React, { Component } from 'react';
import { connect } from 'react-redux';
import FarmProductsView from './view';

const FarmProducts = ({ user }) => (
  <FarmProductsView products={user.farms[user.selectedFarmId].farmProducts} />
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(FarmProducts);
