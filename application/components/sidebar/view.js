import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import namedPaths from '#application/utilities/named-paths';

const farmerNavItems = [
  {
    name: 'View Farm Page',
    path: '/'
  },
  {
    name: 'Farm Dashboard',
    path: '/farm-dashboard'
  },
  {
    name: 'Farm Settings',
    path: '/dashboard/farm-settings'
  },
  {
    name: 'Farm Products',
    path: '/dashboard/farm-products'
  },
  {
    name: 'Farm Orders',
    path: '/dashboard/farm-orders'
  },
  {
    name: 'Farm Customers',
    path: '/dashboard/farm-customers'
  },
  {
    name: 'Farm Distribution Locations',
    path: '/dashboard/farm-distribution-locations'
  },
  {
    name: 'Farm Drop Spots',
    path: '/dashboard/farm-drop-spots'
  },
  {
    name: 'Farm Messages',
    path: '/dashboard/farm-messages'
  },
  {
    name: 'Farm Marketing',
    path: '/dashboard/farm-marketing'
  },
  {
    name: 'Payments',
    path: '/dashboard/farm-payments'
  }
];

const navItems = [
  {
    name: 'My Orders',
    path: '/dashboard/orders'
  },
  {
    name: 'My Messages',
    path: '/dashboard/messages'
  },
  {
    name: 'My Account Settings',
    path: '/dashboard/account-settings'
  }
];

export default ({
  user,
  switchView,
  updateSelectedFarm,
  updatingSelectedFarm
}) => (
  <div className={styles.container}>
    {user.farmView && Object.keys(user.farms).length > 1 && (
      <Form.Group controlId='formSelectedFarm'>
        <Form.Label>
          Selected Farm:&nbsp;
          {user.farms[user.selectedFarmId].name}
        </Form.Label>
        {updatingSelectedFarm ? (
          <Spinner animation='border' style={{ display: 'block' }} />
        ) : (
          <Form.Control
            as='select'
            onChange={updateSelectedFarm}
            value={user.selectedFarmId}
          >
            {Object.keys(user.farms).map((farmKey) => (
              <option key={farmKey} value={farmKey}>
                {user.farms[farmKey].name}
              </option>
            ))}
          </Form.Control>
        )}
      </Form.Group>
    )}
    {(user.farmView ? farmerNavItems : navItems).map((navItem) => (
      <div className={styles.linkContainer} key={navItem.name}>
        <Link className={styles.link} to={navItem.path}>
          {navItem.name}
        </Link>
      </div>
    ))}
    {(!user.farms || user.farmView) && (
      <Link to={namedPaths.dashboardNewFarmForm}>
        <Button variant='success'>Create New Farm Listing</Button>
      </Link>
    )}
    {Boolean(user.farms)
      && (user.farmView ? (
        <Button
          style={{ marginTop: '20px' }}
          variant='secondary'
          onClick={switchView}
        >
          Switch to Buyer View
        </Button>
      ) : (
        <Button
          style={{ marginTop: '20px' }}
          variant='secondary'
          onClick={switchView}
        >
          Switch to Farmer View
        </Button>
      ))}
  </div>
);
