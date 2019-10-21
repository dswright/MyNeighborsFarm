const { Validator } = require('node-input-validator');
const User = require('../models/user');
const { createPasswordHash, createJwt } = require('../services/authentication');
const standardErrorResponse = require('../services/standard-error-response');
const serializeUser = require('../serializers/user');

module.exports = {
  patch: async (request) => {
    const { body, res } = request;
    const {
      firstName, lastName, emailAddress, farmView, selectedFarmId
    } = body;
    const validParams = {
      firstName,
      lastName,
      emailAddress,
      farmView,
      selectedFarmId
    };
    const userValidator = new Validator(validParams, {
      emailAddress: 'email'
    });
    try {
      const valid = await userValidator.check();
      if (!valid) {
        res.status(422).send(
          standardErrorResponse({
            source: 'validator',
            errors: userValidator.errors
          })
        );
        return;
      }
      const oldUser = await User.where({ id: request.userId }).fetch();
      const newUser = await oldUser.set(validParams).save();
      const resp = await serializeUser(newUser);
      res.status(200).send(resp);
    } catch (errors) {
      res.status(422).send(
        standardErrorResponse({
          errors
        })
      );
    }
  },
  post: async (request) => {
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

    try {
      const valid = await userValidator.check();
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

      const modifiedUser = Object.assign({}, noPasswordParams, { passwordHash });
      const modelResponse = await User.forge(modifiedUser).save();

      const serializedUser = serializeUser(modelResponse);

      const token = {
        sub: `${serializedUser.id}`
      };
      const signedToken = createJwt(token, {
        audience: headers.host
      });
      res.status(200).send({
        signedToken, // signedToken is by the client to set a cookie on the user.
        signedIn: true,
        ...serializedUser
      });
    } catch (errors) {
      res.status(422).send(
        standardErrorResponse({
          source: 'userPostError',
          errors
        })
      );
    }
  }
};
