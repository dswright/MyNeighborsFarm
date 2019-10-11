import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const UPDATE_SIGN_UP_FORM = 'UPDATE_SIGN_UP_FORM';

// Reducer
const initialState = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  password: ''
};

export default function fromReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_SIGN_UP_FORM: {
      return update(state, { $merge: action.payload });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateSignUpForm = createAction(UPDATE_SIGN_UP_FORM);
