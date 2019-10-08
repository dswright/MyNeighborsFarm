import { combineReducers } from 'redux';

import user from '../ducks/user';
import formErrors from '../ducks/form-errors';

export default combineReducers({
  user,
  formErrors
});
