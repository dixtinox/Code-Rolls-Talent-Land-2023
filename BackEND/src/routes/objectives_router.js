const express = require('express');
const router = express.Router();
const controller = require('../controllers/objectives_controller.js');

router.route('/checkstreak').get(controller.CheckDailyStreak);
router.route('/followDiet').put(controller.CompleteDailyStreakFollowDiet);


module.exports = router;