const express = require('express');
const router = express.Router();
const controller = require('../controllers/auth_controller.js');

router.route('/singin').post(controller.singin);
router.route('/login').get(controller.login);


module.exports = router;