module.exports = async (user) => {
  const userWithRelations = await user.fetch({
    withRelated: ['farms', 'farms.farmProducts']
  });
  const userAttributes = userWithRelations.serialize({
    hidden: ['passwordHash']
  });
  const farmsObj = userAttributes.farms.reduce((accum, newVal) => {
    accum[newVal.id] = newVal;
    return accum;
  }, {});
  userAttributes.farms = farmsObj;
  return userAttributes;
};
