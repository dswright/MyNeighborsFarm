const express = require('express');

const router = express.Router();

const userValidation = require('../services/user-validation');
const getUser = require('./get-user');

// define the home page route
router.get('/user', (req, res) => {
  const { params, headers } = req;
  // userValidation({ headers }).getUser({ params }).then(
  //  (response) => { res.send(response) }
  // ).catch(
  //   (error) => { res.send(error) }
  // )
  res.send('User details here');
});

// define the about route
router.post('/about', (req, res) => {
  res.send('About birds');
});

module.exports = router;
