const { Validator } = require('node-input-validator');
const User = require('../models/user');
const { validatePassword, createJwt } = require('../services/authentication');
const standardErrorResponse = require('../services/standard-error-response');
const serializeUser = require('../serializers/user');

module.exports = {
  get: () => {},
  post: async (request) => {
    const { body, res, headers } = request;
    const { emailAddress, password } = body;
    const validParams = {
      emailAddress,
      password
    };
    const loginValidator = new Validator(validParams, {
      emailAddress: 'required|email',
      password: 'required'
    });

    try {
      const valid = await loginValidator.check();
      if (!valid) {
        res.status(422).send(
          standardErrorResponse({
            source: 'validator',
            errors: loginValidator.errors
          })
        );
        return;
      }

      const matchedUser = await User.where({ emailAddress }).fetch();

      if (!matchedUser) {
        res
          .status(422)
          .send({ emailAddress: 'Email address not found. Please sign up.' });
        return;
      }
      const userAttributes = matchedUser.toJSON();
      const isValid = await validatePassword(
        password,
        userAttributes.passwordHash
      );
      if (!isValid) {
        res.status(422).send({ password: 'Password is invalid.' });
        return;
      }
      const token = { sub: `${userAttributes.id}` };
      const signedToken = createJwt(token, { audience: headers.host });
      res.status(200).send({
        signedToken, // signedToken is by the client to set a cookie on the user.
        ...(await serializeUser(matchedUser))
      });
    } catch (errors) {
      res.status(422).send(
        standardErrorResponse({
          errors
        })
      );
    }
  }
};
