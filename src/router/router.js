const express = require('express');
const controllers = require('../controllers');
const { addbook } = require('../controllers');

const router = express.Router();
// router.get('/a', controllers.homePage);
router.get('/books', controllers.getbook);
router.post('/insertData', addbook);
router.use(controllers.error404);
router.use(controllers.error500);

module.exports = router;
