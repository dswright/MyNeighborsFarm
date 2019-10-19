const { Validator } = require('node-input-validator');
const User = require('../models/user');
const standardErrorResponse = require('../services/standard-error-response');
const serializeUser = require('../serializers/user');

module.exports = {
  post: async (request) => {
    console.log('test');
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
      console.log('valid', valid);
      const foundUser = await User.where({ id: request.userId }).fetch({
        withRelated: ['farms']
      });
      console.log('foundUser', foundUser);
      const newFarm = await foundUser.related('farms').create(validParams);
      console.log('newFarm', newFarm);
      const updatedUser = await foundUser
        .set({ selectedFarmId: newFarm.id })
        .save();
      console.log('updatedUser', updatedUser);
      const serializedUser = serializeUser(updatedUser);

      res.status(200).send(serializedUser);
    } catch (errors) {
      console.log('errors', errors);
      res.status(422).send(
        standardErrorResponse({
          source: 'userPostError',
          errors
        })
      );
    }
  }
};
