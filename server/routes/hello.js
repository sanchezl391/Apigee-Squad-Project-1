const express = require('express');
const router = express.Router();
const helloController = require('../controllers/helloContoller');

router.get('/', helloController.sayHello);

module.exports = router;