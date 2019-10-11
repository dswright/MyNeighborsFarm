import { combineReducers } from 'redux';

import user from '../ducks/user';
import signUpForm from '../ducks/forms/sign-up';
import logInForm from '../ducks/forms/log-in';
import errors from '../ducks/forms/errors';

export default combineReducers({
  user,
  forms: combineReducers({
    signUpForm,
    logInForm,
    errors
  })
});
