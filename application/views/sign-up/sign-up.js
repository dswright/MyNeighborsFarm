import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setUser } from '#application/ducks/user';
import { Form, Button } from 'react-bootstrap';

const Home = ({ user, dispatch }) => (
  <div className='container'>
    <Helmet
      title='Sign In - MyNeighborsFarm'
      meta={[
        {
          name: 'description',
          content: 'Sign in to your account.'
        }
      ]}
    />
    <h2 style={{ marginTop: '40px;', marginBottom: '30px' }}>Sign In</h2>
    <Form>
      <Form.Group controlId='formFirstName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder='Jim' />
      </Form.Group>
      <Form.Group controlId='formLastName'>
        <Form.Label>First Name</Form.Label>
        <Form.Control type='text' placeholder='Smith' />
      </Form.Group>
      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Email address</Form.Label>
        <Form.Control type='email' placeholder='Enter email' />
        <Form.Text className='text-muted'>
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId='formBasicPassword'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Password' />
      </Form.Group>
      <Button
        variant='success'
        type='submit'
        size='lg'
        block
        style={{ maxWidth: '300px', margin: '40px auto' }}
      >
        Sign Up
      </Button>
      <p>
        <span>Already have an account?</span>
        <Link
          to='/log-in'
          className='nav-link'
          style={{ display: 'inline-block' }}
        >
          <Button
            variant='link'
            type='submit'
            style={{ paddingLeft: 0, paddingTop: '2px' }}
          >
            Log In
          </Button>
        </Link>
      </p>
    </Form>
  </div>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
