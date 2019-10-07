import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '#application/ducks/user';
import { Form, Button, Card } from 'react-bootstrap';

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
    <Card style={{ maxWidth: '600px', margin: '40px auto' }}>
      <Card.Body>
        <h4 style={{ marginBottom: '20px' }}>Log In</h4>
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
            style={{ margin: '40px auto', maxWidth: '300px' }}
          >
            Log In
          </Button>
        </Form>
        <p>
          <span>Need an account?</span>
          <Link
            to='/sign-up'
            className='nav-link'
            style={{ display: 'inline-block' }}
          >
            <Button
              variant='link'
              type='submit'
              style={{ paddingLeft: 0, paddingTop: '2px' }}
            >
              Sign Up
            </Button>
          </Link>
        </p>
      </Card.Body>
    </Card>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
