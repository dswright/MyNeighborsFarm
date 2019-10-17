import React from 'react';
import Button from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

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

export default ({ user }) => (
  <div className={styles.container}>
    {(user.farmView ? farmerNavItems : navItems).map((navItem) => (
      <div className={styles.linkContainer}>
        <Link className={styles.link} to={navItem.path}>
          {navItem.name}
        </Link>
      </div>
    ))}
    {!user.farms.length && (
      <Button className='success'>Create Farm Listing</Button>
    )}
    {Boolean(user.farms.length)
      && (user.farmView ? (
        <Button>Switch to Customer View</Button>
      ) : (
        <Button>Switch to Farm View</Button>
      ))}
  </div>
);
