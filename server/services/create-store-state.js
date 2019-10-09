import User from '../models/user';

const createUserState = (userId) => User.where({ id: userId })
  .fetch()
  .then((foundUser) => {
    if (!foundUser) {
      return { signedIn: false };
    }
    delete foundUser.passwordHash;
    return { user: { ...foundUser.toJSON(), signedIn: true } };
  })
  .catch(() => ({
    user: { signedIn: false }
  }));

export default ({ userId }) => createUserState(userId);
