import User from '../models/user';

const serializeUser = require('../serializers/user');

const defaultState = {
  user: { signedIn: false }
};

export default async (userId) => {
  try {
    const foundUser = await User.where({ id: userId }).fetch();
    if (!foundUser) {
      return defaultState;
    }
    return {
      user: { ...(await serializeUser(foundUser)), signedIn: true }
    };
  } catch (error) {
    return defaultState;
  }
};
