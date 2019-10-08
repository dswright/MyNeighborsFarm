const { Validator } = require('node-input-validator');
const User = require('../models/user');
const { createPasswordHash } = require('../services/authentication');
const standardErrorResponse = require('../services/standard-error-response');

module.exports = {
  get: () => {},
  post: async ({ body, res }) => {
    const userValidator = new Validator(body, {
      firstName: 'required',
      lastName: 'required',
      emailAddress: 'required|email',
      password: 'required'
    });

    try {
      const valid = await userValidator.check();
      console.log('valid', valid);
      if (!valid) {
        res.status(422).send(
          standardErrorResponse({
            source: 'validator',
            errors: userValidator.errors
          })
        );
        return;
      }
      const { password, ...noPasswordBody } = body;

      const passwordHash = await createPasswordHash(password);

      const modifiedUser = Object.assign({}, noPasswordBody, { passwordHash });
      const modelResponse = await User.forge(modifiedUser).save();
      const modelAttributes = modelResponse.toJSON();
      console.log('response attributes', modelAttributes);
      delete modelAttributes.passwordHash;
      res.status(200).send(modelAttributes);
    } catch (error) {
      console.log('error', error);
      res.status(422).send(
        standardErrorResponse({
          source: 'userPostError',
          errors: error
        })
      );
    }
  }
};
