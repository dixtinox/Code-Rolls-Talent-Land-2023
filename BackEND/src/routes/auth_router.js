const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth_controller.js');

router.route('/signin').post(controller.signin);
router.route('/login').get(controller.login);


module.exports = router;