const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

module.exports = router;

router.get('/', controller.index)

router.get('/:number', controller.show)

router.post('/register', controller.add)

router.put('/:number', controller.put)

router.delete('/:number', controller.delete)