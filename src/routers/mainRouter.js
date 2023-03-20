const express = require('express');
const mainController = require('../controllers/mainController.js');
const controller2 = require('../controllers/controller2.js');
const controller3 = require('../controllers/controller3.js');
// ...

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/controller2', controller2.renderPageController2);
router.get('/controller3', controller3.renderPageController3);




module.exports = router;
