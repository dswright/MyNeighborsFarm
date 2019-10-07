const express = require('express');

const router = express.Router();

const userValidation = require('./services/user-validation');
// const getUser = require('./services/get-user');
const createUser = require('./services/apis/create-user');

// define the home page route
router.get('/user', (req, res) => {
  const { params, headers } = req;
  // getUser({ params });
  // for other apis, also validate api params if necesssary
  // validateUserPermissions({ headers }).getUser({ params }).then(
  //  (response) => { res.send(response) }
  // ).catch(
  //   (error) => { res.send(error) }
  // )
  res.send('User details here');
});

// define the about route
router.post('/user', (req, res) => {
  createUser(req.body);
  res.send('About birds');
});

module.exports = router;
