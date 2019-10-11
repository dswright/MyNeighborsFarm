import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';
import { updateUser } from '#application/ducks/user';
import { postLogin } from '#application/apis';
import { updateLogInFormErrors } from '#application/ducks/forms/errors';
import { updateLogInForm } from '#application/ducks/forms/log-in';
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
    dispatch(updateLogInForm({ [event.target.name]: event.target.value }));
    dispatch(updateLogInFormErrors({ [event.target.name]: '' }));
    this.setState({ generalError: '' });
  }

  onBlur = (event) => {
    const { dispatch } = this.props;
    if (!event.target.checkValidity()) {
      dispatch(
        updateLogInFormErrors({
          [event.target.name]: clientErrorMessages[event.target.name]
        })
      );
    }
  }

  submit = (event) => {
    event.preventDefault();
    const { dispatch, logInForm, history } = this.props;
    console.log('loginForm', logInForm);
    postLogin(logInForm)
      .then((response) => {
        const {
          signedToken, firstName, lastName, emailAddress
        } = response.data;
        console.log('response', response);
        setAuthCookie(signedToken);
        dispatch(
          updateUser({
            firstName,
            lastName,
            emailAddress,
            signedIn: true
          })
        );
        history.push(namedPaths.dashboard);
      })
      .catch(({ response }) => {
        const errors = response.data;
        console.log('errors', errors);
        if (Object.keys(errors).length) {
          dispatch(updateLogInFormErrors(errors));
          return;
        }
        this.setState({ generalError: clientErrorMessages.generalError });
      });
  }

  render() {
    const { logInErrors, logInForm } = this.props;
    const { generalError } = this.state;
    return (
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
            <Form onSubmit={this.submit}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='emailAddress'
                  value={logInForm.emailAddress}
                  placeholder='Enter email'
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  required
                  isInvalid={logInErrors.emailAddress.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {logInErrors.emailAddress}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={logInForm.password}
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  required
                  isInvalid={logInErrors.password.length}
                />
                <Form.Control.Feedback type='invalid'>
                  {logInErrors.password}
                </Form.Control.Feedback>
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
            {generalError.length ? (
              <div className='invalid-feedback'>{generalError}</div>
            ) : (
              <div />
            )}
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
  }
}

const mapStateToProps = ({
  forms: {
    logInForm,
    errors: { logInErrors }
  }
}) => ({ logInForm, logInErrors });
export default connect(mapStateToProps)(Home);
