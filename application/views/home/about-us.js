import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import applesFromHome from './images/apples-from-home.jpg';
import onlineOrders from './images/online-orders.jpeg';
import fruitDelivery from './images/fruit-delivery.jpg';
import styles from './styles.scss';

export default () => (
  <div className='container'>
    <h2>About MyNeighborsFarm</h2>
    <div className='grid' style={{ margin: '40px 0 30px' }}>
      <div className='row'>
        <div className='col-md-6'>
          <p>
            For farmers, MyNeighborsFarm is a simple way to obtain new
            customers, receive payment, and schedule deliveries. Our goal is to
            help farmers maximize returns, and minimize farm marketing and
            distribution costs. Creating a farm listing is 100% free, and over
            95% of online sales revenue goes straight to the pockets of farmers.
          </p>
        </div>
        <div className='col-md-6'>
          <Link to='/sign-up' className='nav-link'>
            <Button variant='success' size='lg'>
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <p>
            For buyers, MyNeighborsFarm is a hassle-free way to obtain
            high-quality, local produce. Our scheduling features allow buyers to
            schedule food purchases in advance, and payment can be completed
            online, in advance of pickup. Farm and product reviews give
            transparency on product quality.
          </p>
        </div>
        <div className='col-md-6'>
          <Link to='/sign-up' className='nav-link'>
            <Button variant='success' size='lg'>
              Sign Up Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
