import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const UPDATE_SIGN_UP_FORM_ERRORS = 'UPDATE_SIGN_UP_FORM_ERRORS';
const UPDATE_LOG_IN_FORM_ERRORS = 'UPDATE_LOG_IN_FORM_ERRORS';

// Reducer
const initialState = {
  signUpErrors: {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: ''
  },
  logInErrors: {
    emailAddress: '',
    password: ''
  }
};

export default function fromReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SIGN_UP_FORM_ERRORS: {
      return update(state, { signUpErrors: { $merge: action.payload } });
    }
    case UPDATE_LOG_IN_FORM_ERRORS: {
      return update(state, { logInErrors: { $merge: action.payload } });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateSignUpFormErrors = createAction(UPDATE_SIGN_UP_FORM_ERRORS);
export const updateLogInFormErrors = createAction(UPDATE_LOG_IN_FORM_ERRORS);
