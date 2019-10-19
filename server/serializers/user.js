module.exports = (user) => {
  const userAttributes = user.serialize({ hidden: ['passwordHash'] });
  const farmsObj = userAttributes.farms.reduce((accum, newVal) => {
    accum[newVal.id] = newVal;
    return accum;
  }, {});
  userAttributes.farms = farmsObj;
  return userAttributes;
};
