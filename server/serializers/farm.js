module.exports = (farm) => {
  const farmAttributes = farm.serialize();
  return { [farmAttributes.id]: farmAttributes };
};
