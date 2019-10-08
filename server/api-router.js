const express = require('express');
const userController = require('./controllers/user-controller');

const router = express.Router();

// define the home page route
router.get('/user', (req, res) => {
  const { params, headers } = req;

  res.send('User details here');
});

router.post('/user', userController.post);

module.exports = router;
