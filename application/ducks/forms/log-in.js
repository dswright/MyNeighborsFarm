import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const UPDATE_LOG_IN_FORM = 'UPDATE_LOGIN_FORM';

// Reducer
const initialState = {
  emailAddress: '',
  password: ''
};

export default function fromReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOG_IN_FORM: {
      return update(state, { $merge: action.payload });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateLogInForm = createAction(UPDATE_LOG_IN_FORM);
