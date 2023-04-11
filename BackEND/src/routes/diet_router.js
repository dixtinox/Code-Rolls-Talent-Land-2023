const express = require('express');
const router = express.Router();
const controller = require('../controllers/diet_controller.js');

router.route('/').post(controller.createDiet);
// router.route('/newMeal/').post(controller.createMeal);
// router.route('/').get(controller.listDiet);


module.exports = router;