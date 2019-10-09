import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const UPDATE_USER = 'UPDATE_USER';
const DELETE_USER = 'DELETE_USER';

// Reducer
const initialState = {
  firstName: '',
  lastName: '',
  emailAddress: '',
  password: '',
  signedIn: false
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER: {
      return update(state, { $merge: action.payload });
    }
    case DELETE_USER: {
      // this should actually delete
      return update(state, { $set: action.payload });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateUser = createAction(UPDATE_USER);
export const deleteUser = createAction(DELETE_USER);
