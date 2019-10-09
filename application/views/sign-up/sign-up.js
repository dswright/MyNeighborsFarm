import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { updateUser } from '#application/ducks/user';
import { postUser } from '#application/apis/user';
import { updateFormErrors } from '#application/ducks/form-errors';
import clientErrorMessages from '#application/data/client-error-messages';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalError: ''
    };
  }

  onChange = (event) => {
    console.log('event', event);
    const { dispatch } = this.props;
    dispatch(updateUser({ [event.target.name]: event.target.value }));
    dispatch(updateFormErrors({ [event.target.name]: '' }));
    this.setState({ generalError: '' });
  }

  onBlur = (event) => {
    const { dispatch } = this.props;
    console.log('event', event);
    if (!event.target.checkValidity()) {
      dispatch(
        updateFormErrors({
          [event.target.name]: clientErrorMessages[event.target.name]
        })
      );
    }
  }

  submit = (e) => {
    e.preventDefault();
    const { dispatch, user, history } = this.props;
    postUser(user)
      .then((response) => {
        // console.log('response', response)
        const { signedToken, maxAge } = response.data;
        dispatch(updateUser({ password: '', signedIn: true })); // erase the password from the store, sign in.
        // document.cookie = `token=${signedToken}; expires=${maxValue / 1000}; path=/`; // set jwt token for auth.
        document.cookie = `authToken=${signedToken};max-age=${maxAge}`; // set jwt token for auth.

        history.push('/dashboard');
      })
      .catch(({ response }) => {
        const errors = response.data;
        if (Object.keys(errors).length) {
          dispatch(updateFormErrors(errors));
          return;
        }
        this.setState({ generalError: clientErrorMessages.generalError });
      });
  }

  render() {
    const { user, formErrors } = this.props;
    const { generalError } = this.state;
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
                  onBlur={this.onBlur}
                  value={user.firstName}
                  required
                  isInvalid={formErrors.firstName.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {formErrors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='formLastName'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Smith'
                  name='lastName'
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  value={user.lastName}
                  required
                  isInvalid={formErrors.lastName.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {formErrors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='emailAddress'
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  value={user.emailAddress}
                  required
                  isInvalid={formErrors.emailAddress.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {formErrors.emailAddress}
                </Form.Control.Feedback>
                <Form.Text className='text-muted'>
                  We&apos;ll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Password'
                  name='password'
                  onBlur={this.onBlur}
                  onChange={this.onChange}
                  value={user.password}
                  required
                  isInvalid={formErrors.password.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {formErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
              {generalError.length ? (
                <div className=''>{generalError}</div>
              ) : (
                <div />
              )}
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

const mapStateToProps = ({ user, formErrors }) => ({ user, formErrors });

export default withRouter(connect(mapStateToProps)(Home));
