const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

module.exports = router;

router.get('/', controller.index);