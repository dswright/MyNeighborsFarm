// an object of errors of form { inputName: 'error message', ... }
// if the inputErrors are empty, the specific error is not known.

module.exports = ({ source, errors }) => {
  switch (source) {
    case 'validator':
      console.log('validator', errors);
      return Object.keys(errors).reduce((accum, inputName) => {
        accum[inputName] = errors[inputName].message;
        return accum;
      }, {});
    case 'userPostError':
      if (
        errors.code === '23505'
        && errors.constraint === 'users_emailaddress_unique'
      ) {
        return {
          emailAddress:
            'This email address is already registered. Please sign in.'
        };
      }
      return {};
    default:
      return {};
  }
};
