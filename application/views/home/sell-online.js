import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import applesFromHome from './images/apples-from-home.jpg';
import onlineOrders from './images/online-orders.jpeg';
import fruitDelivery from './images/fruit-delivery.jpg';
import styles from './styles.scss';

const cards = [
  {
    title: '1. Farms list products for sale',
    img: applesFromHome,
    text: 'Farms and small growers list their available products for sale'
  },
  {
    title: '2. Customers make online orders',
    img: onlineOrders,
    text:
      'Restaurants, fruit markets, and retailers make selections and pay online'
  },
  {
    title: '3. Order is Picked Up or Delivered',
    img: fruitDelivery,
    text: 'Buyer Pick-up or farm delivery is arranged as part of the purchase'
  }
];

export default () => (
  <div className='container'>
    <div className='grid' style={{ margin: '40px 0 30px' }}>
      <div className='row'>
        {cards.map((card) => (
          <div className='col-md-4' key={card.title}>
            <Card>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <Card.Img variant='bottom' src={card.img} />
            </Card>
          </div>
        ))}
      </div>
      <div className='row' style={{ marginTop: '30px' }}>
        <div className='col-md-12'>
          <Link to='/learn-more' className='nav-link'>
            <Button
              variant='success'
              size='lg'
              className={styles.centeredButton}
            >
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
