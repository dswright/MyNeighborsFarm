import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { setUser } from '#application/ducks/user';
import { Carousel } from 'react-bootstrap';
import homeBanner from './images/my-neighbors-farm-banner.jpg';
import SellOnline from './sell-online';
import ProductDeliveries from './product-deliveries';
import AboutUs from './about-us';

const Home = ({ user, dispatch }) => (
  <div>
    <Helmet
      title='Buy & Sell farm products locally - MyNeighborsFarm'
      meta={[
        {
          name: 'description',
          content:
            'MyNeighborsFarm.com is a platform for buying and selling local farm proucts.'
        }
      ]}
    />
    <Carousel>
      <Carousel.Item>
        <div
          className='d-block w-100'
          alt='First slide'
          style={{ height: '350px', backgroundImage: `url('${homeBanner}')` }}
        />
        <Carousel.Caption style={{ bottom: '100px' }}>
          <h1>My Neighbor&apos;s Farm</h1>
          <h3>Buy & sell local farm products online</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <SellOnline />
    <ProductDeliveries />
    <AboutUs />
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
