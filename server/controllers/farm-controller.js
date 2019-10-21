const { Validator } = require('node-input-validator');
const User = require('../models/user');
const standardErrorResponse = require('../services/standard-error-response');
const serializeUser = require('../serializers/user');

module.exports = {
  post: async (request) => {
    const { body, res } = request;
    const {
      name,
      description,
      facebookPage,
      youtubeChannel,
      website,
      emailAddress,
      phoneNumber
    } = body;
    const validParams = {
      name,
      description,
      facebookPage,
      youtubeChannel,
      website,
      emailAddress,
      phoneNumber
    };
    const farmValidator = new Validator(validParams, {
      name: 'required'
    });

    try {
      const valid = await farmValidator.check();
      if (!valid) {
        res.status(422).send(
          standardErrorResponse({
            source: 'validator',
            errors: farmValidator.errors
          })
        );
        return;
      }
      const foundUser = await User.where({ id: request.userId }).fetch();
      const newFarm = await foundUser.related('farms').create(validParams);
      const updatedUser = await foundUser
        .set({ selectedFarmId: newFarm.id })
        .save();
      const serializedUser = await serializeUser(updatedUser);

      res.status(200).send(serializedUser);
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
