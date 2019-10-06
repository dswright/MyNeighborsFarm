import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { setUser } from '#application/ducks/user';
import { Form, Button } from 'react-bootstrap';

const Home = ({ user, dispatch }) => (
  <div className='container'>
    <Helmet
      title='Forgot Password - MyNeighborsFarm'
      meta={[
        {
          name: 'description',
          content: 'Forgot your password? Recover it here.'
        }
      ]}
    />
    <h2>Forgot Password</h2>
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>
      <Button variant='link' type='submit'>
        Submit
      </Button>
    </Form>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
