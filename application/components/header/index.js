import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './styles.scss';

export default () => (
  <Navbar bg='light' expand='lg' className={styles.nav}>
    <div className='container'>
      <Navbar.Brand href='#home' className={styles.brand}>
        MyNeighborsFarm
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='navbar-right'>
        <Nav className='mr-auto' />
        <Nav>
          <Nav.Link href='/' className={styles.link}>
            Products
          </Nav.Link>
          <Nav.Link href='#link' className={styles.link}>
            Farms
          </Nav.Link>
          <Nav.Link href='#link' className={styles.link}>
            Log In
          </Nav.Link>
          <Nav.Link href='#link' className={styles.link}>
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  </Navbar>
);
