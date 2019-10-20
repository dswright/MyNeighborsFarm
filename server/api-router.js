const express = require('express');
const userController = require('./controllers/user-controller');
const loginController = require('./controllers/log-in-controller');
const farmController = require('./controllers/farm-controller');

const router = express.Router();

router.post('/user', userController.post);
router.patch('/user', userController.patch);
router.post('/login', loginController.post);
router.post('/farm', farmController.post);

module.exports = router;
