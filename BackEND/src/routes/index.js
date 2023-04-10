const express = requiere('express');
const router = express.Router();
const path = require('path')

const diet = requiere('./diet_router');
const user = requiere('./user_router');
const auth = requiere('./auth_router');
const objectives = requiere('./objectives_router');


router.use("/auth", auth);
router.use("/user", user);
router.use("/diet", diet);
router.use("/objectives", objectives);
