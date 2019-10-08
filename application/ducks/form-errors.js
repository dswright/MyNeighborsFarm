import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const UPDATE_FORM_ERRORS = 'UPDATE_FORM_ERRORS';

// Reducer
const initialState = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  password: ''
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FORM_ERRORS: {
      return update(state, { $merge: action.payload });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateFormErrors = createAction(UPDATE_FORM_ERRORS);
