import User from '../models/user';

module.exports = async (userId) => {
  try {
    const foundUser = await User.where({ id: userId }).fetch();
    if (!foundUser) {
      return { user: { signedIn: false } };
    }
    delete foundUser.passwordHash;
    return { user: { ...foundUser.toJSON(), signedIn: true } };
  } catch (error) {
    return { user: { signedIn: false } };
  }
};
