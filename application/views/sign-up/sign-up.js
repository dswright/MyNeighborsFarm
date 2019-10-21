import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { updateUser } from '#application/ducks/user';
import { postUser } from '#application/apis';
import { updateSignUpFormErrors } from '#application/ducks/forms/errors';
import { updateSignUpForm } from '#application/ducks/forms/sign-up';
import clientErrorMessages from '#application/data/client-error-messages';
import namedPaths from '#application/utilities/named-paths';
import setAuthCookie from '#application/utilities/set-auth-cookie';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalError: ''
    };
  }

  onChange = (event) => {
    const { dispatch } = this.props;
    dispatch(updateSignUpForm({ [event.target.name]: event.target.value }));
    dispatch(updateSignUpFormErrors({ [event.target.name]: '' }));
    this.setState({ generalError: '' });
  }

  onBlur = (event) => {
    const { dispatch } = this.props;
    if (!event.target.checkValidity()) {
      dispatch(
        updateSignUpFormErrors({
          [event.target.name]: clientErrorMessages[event.target.name]
        })
      );
    }
  }

  submit = (e) => {
    e.preventDefault();
    const { dispatch, signUpForm, history } = this.props;
    postUser(signUpForm)
      .then((response) => {
        const { signedToken, ...userData } = response.data;
        setAuthCookie(signedToken);
        dispatch(updateUser(userData));
        history.push(namedPaths.dashboard);
      })
      .catch(({ response }) => {
        const errors = response.data;
        if (Object.keys(errors).length) {
          dispatch(updateSignUpFormErrors(errors));
          return;
        }
        this.setState({ generalError: clientErrorMessages.generalError });
      });
  }

  render() {
    const { signUpForm, signUpErrors } = this.props;
    const { generalError } = this.state;
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
                  value={signUpForm.firstName}
                  required
                  isInvalid={signUpErrors.firstName.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {signUpErrors.firstName}
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
                  value={signUpForm.lastName}
                  required
                  isInvalid={signUpErrors.lastName.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {signUpErrors.lastName}
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
                  value={signUpForm.emailAddress}
                  required
                  isInvalid={signUpErrors.emailAddress.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {signUpErrors.emailAddress}
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
                  value={signUpForm.password}
                  required
                  isInvalid={signUpErrors.password.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {signUpErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
              {generalError.length ? (
                <div className='invalid-feedback'>{generalError}</div>
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

const mapStateToProps = ({
  forms: {
    signUpForm,
    errors: { signUpErrors }
  }
}) => ({ signUpForm, signUpErrors });

export default withRouter(connect(mapStateToProps)(Home));
