const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller.js');

router.route('/').put(controller.Update);


module.exports = router;