import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import applesFromHome from './images/apples-from-home.jpg';
import onlineOrders from './images/online-orders.jpeg';
import fruitDelivery from './images/fruit-delivery.jpg';
import styles from './styles.scss';

const cards = [
  {
    title: 'Customer Harvest',
    img: applesFromHome,
    text:
      "The classic 'pay and pick' payment option. Browse farms online, pay upfront, and go picking! Fun, easy, and get a genuine farm experience."
  },
  {
    title: 'Customer Pick Up',
    img: onlineOrders,
    text:
      'Products can be sold pre-picked and packaged, and ready for pickup. Pick-up will often take place at the farm, or a nearby distribution location.'
  },
  {
    title: 'Farm Delivery',
    img: fruitDelivery,
    text:
      'Farms may offer delivery services of their products. Farms may optionally charge a delivery fee for their service.'
  }
];

export default () => (
  <div className='container'>
    <h2>3 Options for Product Delivery</h2>
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
    </div>
  </div>
);
