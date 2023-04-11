const express = require('express');
const router = express.Router();
const controller = require('../controllers/user_controller.js');

router.route('/').put(controller.Update);
router.route('/:id').delete(controller.remove);


module.exports = router;