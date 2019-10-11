const { Validator } = require('node-input-validator');
const User = require('../models/user');
const { createPasswordHash, createJwt } = require('../services/authentication');
const standardErrorResponse = require('../services/standard-error-response');

module.exports = {
  get: () => {},
  post: async (request) => {
    console.log('responding..');
    const { body, res, headers } = request;
    const {
      firstName, lastName, emailAddress, password
    } = body;
    const validParams = {
      firstName,
      lastName,
      emailAddress,
      password
    };
    const userValidator = new Validator(
      validParams,
      {
        firstName: 'required',
        lastName: 'required',
        emailAddress: 'required|email',
        password: 'required|minLength:8'
      },
      { minLength: 'The :attribute must be greater than :arg0 characters' }
    );
    console.log('trying');

    try {
      const valid = await userValidator.check();
      console.log('valid?', valid);
      if (!valid) {
        res.status(422).send(
          standardErrorResponse({
            source: 'validator',
            errors: userValidator.errors
          })
        );
        return;
      }
      const { password, ...noPasswordParams } = validParams;

      const passwordHash = await createPasswordHash(password);

      console.log('noPasswordParams', noPasswordParams);
      const modifiedUser = Object.assign({}, noPasswordParams, { passwordHash });
      const modelResponse = await User.forge(modifiedUser).save();
      console.log('modelResponse', modelResponse);
      const modelAttributes = modelResponse.toJSON();
      delete modelAttributes.passwordHash;
      const token = {
        sub: `${modelAttributes.id}`
      };
      const signedToken = createJwt(token, {
        audience: headers.host
      });
      res.status(200).send({
        signedToken,
        emailAddress,
        firstName,
        lastName // signedToken and maxAge are used by the client to set a cookie on the user.
      });
    } catch (errors) {
      console.log('caught error', errors);
      res.status(422).send(
        standardErrorResponse({
          source: 'userPostError',
          errors
        })
      );
    }
  }
};
