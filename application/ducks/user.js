import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const SET_USER = 'SET_USER';
const DELETE_USER = 'DELETE_USER';

// Reducer
const initialValues = {};

export default function userReducer(state = initialValues, action) {
  switch (action.type) {
    case SET_USER: {
      return update(state, { $set: action.payload });
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
export const setUser = createAction(SET_USER);
export const deleteUser = createAction(DELETE_USER);
