const express = require('express');
const userController = require('./controllers/user-controller');
const loginController = require('./controllers/log-in-controller');

const router = express.Router();

router.post('/user', userController.post);
router.patch('/user', userController.patch);
router.post('/login', loginController.post);
module.exports = router;
