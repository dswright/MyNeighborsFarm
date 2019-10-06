import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { setUser } from '#application/ducks/user';
import { Form, Button } from 'react-bootstrap';

const Home = ({ user, dispatch }) => (
  <div className='container'>
    <Helmet
      title='Log In - MyNeighborsFarm'
      meta={[
        {
          name: 'description',
          content: 'Log in to your account.'
        }
      ]}
    />
    <h2 style={{ marginTop: '40px;', marginBottom: '30px' }}>Log In</h2>
    <Form>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Button
        variant='success'
        block
        type='submit'
        size='lg'
        style={{ margin: '40px auto 0', maxWidth: '300px' }}
      >
        Log In
      </Button>
    </Form>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
