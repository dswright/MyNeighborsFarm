module.exports = (user) => user.serialize({ hidden: ['passwordHash'] });
