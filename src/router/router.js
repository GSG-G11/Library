const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.get('/a', controllers.homePage);
// router.use(controller.error404);
// router.use(controller.error500);

module.exports = router;
