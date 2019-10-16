import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const navItems = [
  {
    name: 'View Store',
    path: '/'
  },
  {
    name: 'Admin Home',
    path: '/dashboard'
  },
  {
    name: 'Products',
    path: '/dashboard/products'
  },
  {
    name: 'Orders',
    path: '/dashboard/orders'
  },
  {
    name: 'Customers',
    path: '/dashboard/customers'
  },
  {
    name: 'Distribution Locations',
    path: '/dashboard/distribution-locations'
  },
  {
    name: 'Drop Spots',
    path: '/dashboard/drop-spots'
  },
  {
    name: 'Messages',
    path: '/dashboard/messages'
  },
  {
    name: 'Marketing',
    path: '/dashboard/marketing'
  }
];

export default ({ history, location }) => (
  <div className={styles.container}>
    {navItems.map((navItem) => (
      <div className={styles.linkContainer}>
        <Link className={styles.link} to={navItem.path}>
          {navItem.name}
        </Link>
      </div>
    ))}
  </div>
);
