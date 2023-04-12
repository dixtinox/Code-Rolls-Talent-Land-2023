const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller.js');

router.route('/').put(controller.Update);
router.route('/:id').delete(controller.remove);
router.route('/:id').get(controller.GetOne);


module.exports = router;