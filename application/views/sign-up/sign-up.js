import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { updateUser } from '#application/ducks/user';
import { postUser } from '#application/apis/user';

class Home extends Component {
  onChange = (event) => {
    console.log('event', event);
    const { dispatch } = this.props;
    dispatch(updateUser({ [event.target.name]: event.target.value }));
  }

  submit = (e) => {
    e.preventDefault();
    const { user } = this.props;
    postUser(user).then((response) => {
      console.log('user response', response);
    });
  }

  render() {
    const { user } = this.props;
    console.log('user', user);
    return (
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
        <Card style={{ maxWidth: '600px', margin: '40px auto' }}>
          <Card.Body>
            <h4 style={{ marginBottom: '20px' }}>Sign Up</h4>
            <Form onSubmit={this.submit}>
              <Form.Group controlId='formFirstName'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Jim'
                  name='firstName'
                  onChange={this.onChange}
                  value={user.firstName}
                />
              </Form.Group>
              <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Smith'
                  name='lastName'
                  onChange={this.onChange}
                  value={user.lastName}
                />
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='emailAddress'
                  onChange={this.onChange}
                  value={user.emailAddress}
                />
                <Form.Text className='text-muted'>
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='passwordHash'
                  onChange={this.onChange}
                  value={user.passwordHash}
                />
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
          </Card.Body>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);
