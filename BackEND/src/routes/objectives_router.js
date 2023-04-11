const express = require('express');
const router = express.Router();
const controller = require('../controllers/objectives_controller.js');

router.route('/checkstreak').get(controller.CheckDailyStreak);
// router.route('/login').get(controller.login);


module.exports = router;