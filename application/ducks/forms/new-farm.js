import { createAction } from 'redux-actions';
import update from 'react-addons-update';

// Actions
const UPDATE_NEW_FARM_FORM = 'UPDATE_NEW_FARM_FORM';

// Reducer
const initialState = {
  name: '',
  description: '',
  facebookPage: '',
  youtubeChannel: '',
  website: '',
  emailAddress: '',
  phoneNumber: ''
};

export default function fromReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NEW_FARM_FORM: {
      return update(state, { $merge: action.payload });
    }
    default: {
      return state;
    }
  }
}

// Action Creators
export const updateNewFarmForm = createAction(UPDATE_NEW_FARM_FORM);
