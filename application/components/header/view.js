import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './styles.scss';

const LoggedOutRoutes = () => (
  <Fragment>
    <Nav.Link href='/log-in' className={styles.link}>
      Log In
    </Nav.Link>
    <Nav.Link href='/sign-up' className={styles.link}>
      Sign Up
    </Nav.Link>
  </Fragment>
);

const LoggedInRoutes = () => (
  <Nav.Link href='/dashboard' className={styles.link}>
    My Account
  </Nav.Link>
);

export default ({ user: signedIn }) => (
  <Navbar bg='light' expand='lg' className={styles.nav}>
    <div className='container'>
      <Navbar.Brand href='/' className={styles.brand}>
        MyNeighborsFarm
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='navbar-right'>
        <Nav className='mr-auto' />
        <Nav>
          <Nav.Link href='/products' className={styles.link}>
            Products
          </Nav.Link>
          <Nav.Link href='/farms' className={styles.link}>
            Farms
          </Nav.Link>
          {signedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
