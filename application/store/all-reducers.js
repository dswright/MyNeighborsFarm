import { combineReducers } from 'redux';

import user from '../ducks/user';
import signUpForm from '../ducks/forms/sign-up';
import logInForm from '../ducks/forms/log-in';
import errors from '../ducks/forms/errors';
import newFarmForm from '../ducks/forms/new-farm';

export default combineReducers({
  user,
  forms: combineReducers({
    newFarmForm,
    signUpForm,
    logInForm,
    errors
  })
});
