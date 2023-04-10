const express = requiere('express');
const router = express.Router();
const controller = requiere('../controllers/user_controller.js');

router.route('/').put(controller.test);