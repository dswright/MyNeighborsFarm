import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { updateNewFarmFormErrors } from '#application/ducks/forms/errors';
import { updateNewFarmForm } from '#application/ducks/forms/new-farm';
import { postFarm } from '#application/apis';
import { updateUser } from '#application/ducks/user';
import namedPaths from '#application/utilities/named-paths';
import clientErrorMessages from '#application/data/client-error-messages';

class NewFarm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalError: ''
    };
  }

  onChange = (event) => {
    const { dispatch } = this.props;
    dispatch(updateNewFarmForm({ [event.target.name]: event.target.value }));
    dispatch(updateNewFarmFormErrors({ [event.target.name]: '' }));
    this.setState({ generalError: '' });
  }

  onBlur = (event) => {
    const { dispatch } = this.props;
    if (!event.target.checkValidity()) {
      dispatch(
        updateNewFarmFormErrors({
          [event.target.name]: clientErrorMessages[event.target.name]
        })
      );
    }
  }

  submit = (e) => {
    e.preventDefault();
    const { dispatch, newFarmForm, history } = this.props;
    postFarm(newFarmForm)
      .then((response) => {
        dispatch(updateUser(response.data)); // updating the user, which has the farms.
        history.push(namedPaths.dashboardFarmDashboard);
      })
      .catch(({ response }) => {
        const errors = response.data;
        if (Object.keys(errors).length) {
          dispatch(updateNewFarmFormErrors(errors));
          return;
        }
        this.setState({ generalError: clientErrorMessages.generalError });
      });
  }

  render() {
    const { generalError } = this.state;
    const { newFarmForm, newFarmErrors } = this.props;
    return (
      <Card style={{ maxWidth: '600px', margin: '40px auto' }}>
        <Card.Body>
          <h4>Add New Farm Listing</h4>
          <Form onSubmit={this.submit}>
            <Form.Group controlId='formName'>
              <Form.Label>Farm Name</Form.Label>
              <Form.Control
                type='text'
                placeholder={"Jill's Blueberry Farm"}
                name='name'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.name}
                required
                isInvalid={newFarmErrors.name}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formDescription'>
              <Form.Label>Farm Description</Form.Label>
              <Form.Control
                as='textarea'
                rows='3'
                placeholder={
                  "Jill's blueberry farm carries the freshest blueberries!"
                }
                name='description'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.description}
                isInvalid={newFarmErrors.description.length}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.description}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formFacebookPage'>
              <Form.Label>Farm Facebook Page</Form.Label>
              <Form.Control
                type='text'
                placeholder='facebook.com/jills-blueberry-farm'
                name='facebookPage'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.facebookPage}
                isInvalid={newFarmErrors.facebookPage.length}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.facebookPage}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formYoutubeChannel'>
              <Form.Label>Farm Youtube Channel</Form.Label>
              <Form.Control
                type='text'
                placeholder='https://www.youtube.com/channel/UCfmqCsp8fWiFv2Kb7IqLlRw'
                name='youtubeChannel'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.youtubeChannel}
                isInvalid={newFarmErrors.youtubeChannel.length}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.youtubeChannel}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formWebsite'>
              <Form.Label>Farm Website</Form.Label>
              <Form.Control
                type='text'
                placeholder='www.jills-blueberry-farm.com'
                name='website'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.website}
                isInvalid={newFarmErrors.website.length}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.website}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formEmailAddress'>
              <Form.Label>Farm Email Address</Form.Label>
              <Form.Control
                type='text'
                placeholder='Jill@jills-blueberry-farm.com'
                name='emailAddress'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.emailAddress}
                isInvalid={newFarmErrors.emailAddress.length}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.emailAddress}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formPhoneNumber'>
              <Form.Label>Farm Phone Number</Form.Label>
              <Form.Control
                type='text'
                placeholder='707-829-0273'
                name='phoneNumber'
                onChange={this.onChange}
                onBlur={this.onBlur}
                value={newFarmForm.phoneNumber}
                isInvalid={newFarmErrors.phoneNumber.length}
              />
              <Form.Control.Feedback type='invalid'>
                {newFarmErrors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant='success' type='submit'>
              Create Farm Listing
            </Button>
          </Form>
          {generalError.length ? (
            <div className='invalid-feedback'>{generalError}</div>
          ) : (
            <div />
          )}
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({
  user,
  forms: {
    newFarmForm,
    errors: { newFarmErrors }
  }
}) => ({ user, newFarmForm, newFarmErrors });

export default connect(mapStateToProps)(NewFarm);
