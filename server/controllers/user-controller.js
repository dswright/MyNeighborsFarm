const { Validator } = require('node-input-validator');
const User = require('../models/user');
const { createPasswordHash, createJwt } = require('../services/authentication');
const standardErrorResponse = require('../services/standard-error-response');

module.exports = {
  get: () => {},
  post: async (request) => {
    const { body, res, headers } = request;
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
      console.log('request', headers.host);
      const token = {
        sub: `${modelAttributes.id}`
      };
      const signedToken = createJwt(token, {
        audience: headers.host
      });
      console.log('token', token);
      const maxAge = 60 * 60 * 24 * 30;
      res
        .status(200)
        .cookie('token', signedToken, { maxAge })
        .send(modelAttributes);
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
