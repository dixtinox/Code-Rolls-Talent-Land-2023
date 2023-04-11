const express = require('express');
const router = express.Router();
const path = require('path')

// const diet = require('./diet_router');
const user = require('./user_router');
const auth = require('./auth_router');
// const objectives = require('./objectives_router');


router.use("/auth", auth);
router.use("/user", user);
// router.use("/diet", diet);
// router.use("/objectives", objectives);

module.exports = router;